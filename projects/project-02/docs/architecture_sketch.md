# Architecture Sketch
- Router (hash) → views (Home, Analytics)
- Store (class) holds tasks; Task (class) is the model
- Services: local (localStorage), publicApi (GET + TTL), cloud (PUT)
- Utils: dom, time, uuid
- Modules ≥6 satisfied by routes/state/services/ui/utils