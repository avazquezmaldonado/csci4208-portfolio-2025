# Project Proposal — capstone-01

**Team repo:** https://github.com/avazquezmaldonado/CardMatch  
**Project (v2) board:** https://github.com/avazquezmaldonado/CardMatch/projects/1  
**Live demo / recording (if applicable):** Demo available after capstone-09

## Deliverables for this phase

- Team roster and project title clearly defined
- High-level abstract of the project vision and goals
- Problem statement and proposed solution
- Initial scope and feature list
- Technology stack selection justified
- Timeline and milestones overview

## Summary (what we produced)

**CardMatch** is a credit card recommendation engine that helps users discover the best cards based on their financial profile and spending patterns.

**Team:** Angel Vazquez Maldonado (solo capstone project)

**Problem:** Choosing optimal credit cards is difficult. Users struggle to compare card features, estimate rewards based on personal spending, and filter for eligibility (credit score, 5/24 rule). Manual comparison of dozens of cards is time-consuming and error-prone.

**Solution:** An intelligent recommendation system that analyzes user profile and spending to return:
- Best card for each spending category
- Estimated annual rewards per card
- Top 3 overall card recommendations
- Eligibility filtering based on credit score and account history

**Key Features Proposed:**
- User profile input (credit score, accounts opened in 24mo, student status, preferences)
- Monthly spending by category (groceries, dining, travel, other)
- Real-time scoring and recommendations
- Eligibility filtering (credit score thresholds, Chase 5/24 rule)
- Export recommendations as JSON
- Support for 20+ credit cards with realistic reward structures

**Technology Stack:**
- **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript (ES6+)
- **Backend:** Node.js with Express.js
- **Data Storage:** JSON-based (no external database required)
- **Testing:** Jest, manual testing

## Evidence / Artifacts

- [Detailed Proposal Document](https://github.com/avazquezmaldonado/CardMatch/blob/main/docs/capstone-01.md)
- [Team GitHub Repository](https://github.com/avazquezmaldonado/CardMatch)
- [Project README with Overview](https://github.com/avazquezmaldonado/CardMatch#readme)

## Notes & Risks

- **Risk:** Solo project (mitigated by clear scope and proven technologies)
- **Advantage:** No team coordination overhead
- **Technical:** All technologies chosen are well-documented and suitable for capstone
- **Data:** No external APIs required—reduces dependencies and complexity
- **Scope:** Conservative feature set ensures completion within timeline
