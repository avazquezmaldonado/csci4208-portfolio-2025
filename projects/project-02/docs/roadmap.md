# Roadmap
## MVP (Sprint 2)
- Add/toggle/delete tasks
- Local autosave + restore
- Public GET with TTL
- PUT summary to JSONBin

## Full (Sprint 3)
- Filters
- Import/Export JSON
- Small mobile tweaks

## Risks
1) JSONBin write blocked: use a fresh public bin.
2) CORS on GET: use jsonplaceholder (works).
3) Local state corruption: keep doc shape minimal.