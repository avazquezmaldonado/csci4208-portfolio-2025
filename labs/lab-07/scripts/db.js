// Private module state
let _adapter = null;
let _doc = null;

// choose storage engine
export function useAdapter(adapter) {
  _adapter = adapter;
}

// load the app document via the adapter and cache it
export async function boot() {
  if (!_adapter) throw new Error("No adapter set. Call useAdapter(...) first.");
  _doc = await _adapter.load();
  return _doc;
}

// Unique id helper
export const uid = () => crypto.randomUUID().slice(0, 8);

// get a safe copy of the cached doc
export function getDoc() {
  return structuredClone(_doc);
}

/* =================================
   Basic CRUD (Dev Cycle 1)
   ================================= */

export async function insertOne(col, data) {
  const d = getDoc();
  const rec = { id: uid(), ...data };
  d[col].push(rec);
  await _adapter.save(d);
  _doc = d;
  return rec;
}

export function findMany(col, predicate = null) {
  const d = getDoc();
  const rows = d[col] ?? [];
  return predicate ? rows.filter(predicate) : rows;
}

export function findOne(col, predicate = null) {
  const d = getDoc();
  const rows = d[col] ?? [];
  return predicate ? rows.find(predicate) ?? null : (rows[0] ?? null);
}

export async function updateOne(col, id, patch) {
  const d = getDoc();
  const rows = d[col] ?? [];
  const i = rows.findIndex(r => r.id === id);
  if (i === -1) return 0;
  rows[i] = { ...rows[i], ...patch };
  await _adapter.save(d);
  _doc = d;
  return 1;
}

export async function deleteOne(col, id) {
  const d = getDoc();
  const rows = d[col] ?? [];
  const i = rows.findIndex(r => r.id === id);
  if (i === -1) return 0;
  rows.splice(i, 1);
  await _adapter.save(d);
  _doc = d;
  return 1;
}

/* =================================
   Advanced CRUD (Dev Cycle 2)
   ================================= */

function queryBy(filter = {}) {
  if (!filter || Object.keys(filter).length === 0) return () => true;

  const tests = [];
  for (const [field, expr] of Object.entries(filter)) {
    if (expr && typeof expr === "object" && !Array.isArray(expr)) {
      for (const [op, val] of Object.entries(expr)) {
        if (op === "$in") tests.push(rec => val.includes(rec[field]));
        else if (op === "$ne") tests.push(rec => rec[field] !== val);
        else if (op === "$gte") tests.push(rec => rec[field] >= val);
        else if (op === "$contains") tests.push(rec => String(rec[field] ?? "").includes(val));
        else tests.push(() => true);
      }
    } else {
      tests.push(rec => rec[field] === expr);
    }
  }
  return rec => tests.every(fn => fn(rec));
}

export function findManyBy(col, filter = {}) {
  const pred = queryBy(filter);
  return findMany(col, pred);
}

export function findOneBy(col, filter = {}) {
  const pred = queryBy(filter);
  const rows = findMany(col, pred);
  return rows.length ? rows[0] : null;
}

function project(row, fields) {
  if (!fields || Object.keys(fields).length === 0) return row;
  const out = {};
  for (const [k, v] of Object.entries(fields)) {
    if (v === 1 && k in row) out[k] = row[k];
  }
  if (!("id" in fields) && "id" in row) out.id = row.id;
  return out;
}

export function find(col, args = {}) {
  const { filter = {}, sort = null, skip = 0, limit = Infinity, fields = null } = args;
  let rows = findManyBy(col, filter);

  if (sort && typeof sort === "object") {
    const [k, dir] = Object.entries(sort)[0] ?? [];
    if (k) {
      rows = rows.slice().sort((a, b) => {
        if (a[k] == null && b[k] == null) return 0;
        if (a[k] == null) return 1;
        if (b[k] == null) return -1;
        return a[k] < b[k] ? -1 : a[k] > b[k] ? 1 : 0;
      });
      if (dir === -1) rows.reverse();
    }
  }

  const paged = rows.slice(skip, skip + (isFinite(limit) ? limit : rows.length));
  return fields ? paged.map(r => project(r, fields)) : paged;
}

// update operators
export async function updateOneOps(col, id, ops = {}) {
  const d = getDoc();
  const rows = d[col] ?? [];
  const i = rows.findIndex(r => r.id === id);
  if (i === -1) return 0;

  const curr = rows[i];
  let next = { ...curr };

  if (ops.$set) next = { ...next, ...ops.$set };

  if (ops.$addToSet) {
    for (const [k, val] of Object.entries(ops.$addToSet)) {
      const arr = Array.isArray(next[k]) ? next[k].slice() : [];
      const vals = Array.isArray(val) ? val : [val];
      for (const v of vals) if (!arr.includes(v)) arr.push(v);
      next[k] = arr;
    }
  }

  if (ops.$pull) {
    for (const [k, val] of Object.entries(ops.$pull)) {
      const arr = Array.isArray(next[k]) ? next[k] : [];
      const vals = Array.isArray(val) ? val : [val];
      next[k] = arr.filter(x => !vals.includes(x));
    }
  }

  rows[i] = next;
  await _adapter.save(d);
  _doc = d;
  return 1;
}

export async function upsertOne(col, filter, data) {
  const existing = findOneBy(col, filter);
  if (existing) {
    await updateOne(col, existing.id, data);
    return findOne(col, r => r.id === existing.id);
  } else {
    return insertOne(col, data);
  }
}

/* =================================
   Batch (Dev Cycle 2 Goal 5)
   ================================= */

export async function transact(mutatorFn) {
  const d = getDoc();
  mutatorFn(d);
  await _adapter.save(d);            // single write-through; adapter stamps rev/updatedAt
  _doc = d;                          // refresh cache
  return _doc;                       // return the new canonical doc
}