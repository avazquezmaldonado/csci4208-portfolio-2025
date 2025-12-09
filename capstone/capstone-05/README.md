# Data Design — capstone-05

**Team repo:** https://github.com/avazquezmaldonado/CardMatch  
**Project (v2) board:** https://github.com/avazquezmaldonado/CardMatch/projects  
**Live demo / recording (if applicable):** N/A (design phase)

## Deliverables for this phase
- Data schemas for all entities
- CRUD operation specifications
- Sample data and test fixtures
- Data validation rules

## Summary (what we produced)
Data design was about nailing down what information I need to store and how it should look. I defined schemas for user profiles (credit score, preferences, etc.), spending patterns (monthly amounts by category), and credit card details (rewards rates, fees, requirements).

Since this is an MVP, I'm just using JSON files instead of spinning up a database. Made sample data files with realistic card info that I can use for testing. Also wrote out validation rules so bad data doesn't sneak in.

## Evidence / Artifacts
- [Data Design Document](https://github.com/avazquezmaldonado/CardMatch/blob/main/docs/capstone-05-data-design.md)
- JSON schemas and examples
- Sample data in `/data` folder

## Notes & Risks
JSON files work fine for this project size, but I know they won't scale great if this got bigger. For now though, it keeps things simple - no database setup needed. The main thing is making sure validation is solid so the recommendation engine doesn't choke on bad input.
