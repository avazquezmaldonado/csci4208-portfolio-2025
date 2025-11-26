# Project Proposal — capstone-01

**Team repo:** https://github.com/avazquezmaldonado/CardMatch  
**Project (v2) board:** https://github.com/users/avazquezmaldonado/projects/2  
**Live demo (if applicable):** N/A

## Deliverables for this phase
- Team roster (solo)
- Project idea
- Abstract
- Links to team repo & project board

## Summary

**Project Name:** CardMatch  
**Developer:** Angel Vazquez Maldonado  

CardMatch is a full-stack web application that recommends optimal credit cards to a user based on their spending profile, credit score, and recent credit activity (e.g., Chase 5/24 rule). The system evaluates existing cards the user owns, estimates monthly/annual rewards, and recommends the best card or card-combo for maximizing value.

This milestone includes the project abstract, problem definition, proposed solution, and the initial project board setup.

### Abstract
CardMatch helps users understand which credit cards provide the highest return based on their financial habits. By combining internal rules, reward-calculation logic, and user inputs, CardMatch identifies the most suitable cards and filters out options the user is not eligible for (credit score and 5/24). This proposal outlines the problem domain, solution overview, and planned features.

### Problem Statement
Choosing the right credit card is difficult due to varying reward structures, annual fees, eligibility requirements, and policies like the Chase 5/24 rule. Users rarely know which cards maximize their rewards or whether they even qualify.

### Solution Summary
CardMatch simplifies the process by:
- Collecting user spending categories  
- Collecting credit score range  
- Tracking cards opened in the last 24 months  
- Tracking cards the user currently owns  
- Applying eligibility filters  
- Calculating estimated rewards  
- Recommending the best cards and combinations  

All logic is internal with no external APIs.

### High-Level Feature List
- User spending input UI  
- Credit score input  
- 5/24 eligibility engine  
- Existing card tracking  
- Reward calculation engine  
- Best card per category  
- Best overall card combo  
- Dashboard interface  
- Simple backend API (Node.js)

## Evidence / Artifacts
- Team repo created  
- Project board configured  
- Initial notes and design ideas added to the repo (non-capstone files)

## Notes & Risks
- Credit card data is simplified  
- No API integrations (scope-controlled)  
- Rewards estimates are approximate  
- Scope is designed for a single developer
  
- Initial planning notes in CardMatch repo  

## Notes & Risks
- Real credit card data will be simplified  
- No API integrations (intentionally for scope control)  
- Rewards calculations are estimates, not financial advice  
- Scope designed for one developer  
