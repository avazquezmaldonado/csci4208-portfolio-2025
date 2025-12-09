# Server Audit — capstone-07

**Team repo:** https://github.com/avazquezmaldonado/CardMatch  
**Project (v2) board:** https://github.com/avazquezmaldonado/CardMatch/projects  
**Live demo / recording (if applicable):** N/A (audit phase)

## Deliverables for this phase
- Backend architecture walkthrough
- API endpoint testing and validation
- Unit test implementation and results
- Server-side error handling verification

## Summary (what we produced)
Backend audit meant testing all my API endpoints and making sure the server logic actually works. I wrote unit tests for the rewards calculation service since that's the heart of the whole recommendation engine. Tested different spending scenarios to make sure the math checks out.

Went through each endpoint with Postman to verify they respond correctly - both happy path and error cases. Made sure error messages are helpful instead of just throwing generic errors.

## Evidence / Artifacts
- [Server Audit Document](https://github.com/avazquezmaldonado/CardMatch/blob/main/docs/capstone-07-server-audit.md)
- Backend code in `/backend` folder
- Unit tests in `/backend/tests`
- Test run results

## Notes & Risks
The rewards calculation tests gave me confidence that the core logic works right. Found a couple edge cases I hadn't considered (like what if someone has zero spending in all categories?). Fixed those. Server handles errors pretty well now - returns appropriate status codes and clear messages.
