# Backend Design — capstone-04

**Team repo:** https://github.com/avazquezmaldonado/CardMatch  
**Project (v2) board:** https://github.com/avazquezmaldonado/CardMatch/projects  
**Live demo / recording (if applicable):** N/A (design phase)

## Deliverables for this phase
- Express.js application architecture
- API routes and endpoint specifications
- Controller and service layer design
- Data layer integration plan

## Summary (what we produced)
This is where I figured out how the server side would work. I'm using Express since it's straightforward and I've worked with it before. The backend design doc lays out the API endpoints - basically routes for getting card data, submitting user profiles, and calculating recommendations.

I organized everything into controllers (handle requests), services (business logic), and a data layer (read/write JSON files). Trying to keep it clean so if I need to change how recommendations work, I'm not digging through a mess of spaghetti code.

## Evidence / Artifacts
- [Backend Design Document](https://github.com/avazquezmaldonado/CardMatch/blob/main/docs/capstone-04-backend-design.md)
- API endpoint specs
- Folder structure in `/backend`

## Notes & Risks
The recommendation algorithm is going to be the tricky part - need to make sure it runs fast enough even with a bunch of cards to compare. Also want to keep error handling consistent so users get helpful messages instead of cryptic 500 errors. Separation of concerns matters here so I don't end up with controllers doing too much.
