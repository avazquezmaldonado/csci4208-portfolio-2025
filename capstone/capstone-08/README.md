# Data Audit — capstone-08

**Team repo:** https://github.com/avazquezmaldonado/CardMatch  
**Project (v2) board:** https://github.com/avazquezmaldonado/CardMatch/projects  
**Live demo / recording (if applicable):** N/A (audit phase)

## Deliverables for this phase
- Data schema validation and verification
- CRUD operation testing
- Sample data quality assessment
- Data integrity and validation rules review

## Summary (what we produced)
For the data audit, I checked that all the CRUD operations work correctly with the JSON files. Read, write, update operations all behave as expected. Validated that the schemas I defined earlier are being enforced properly.

Looked at the sample card data to make sure it's realistic and represents different types of cards (cashback, travel, etc.). Tested validation rules with intentionally bad input to confirm they catch problems.

## Evidence / Artifacts
- [Data Audit Document](https://github.com/avazquezmaldonado/CardMatch/blob/main/docs/capstone-08-data-audit.md)
- Data handling code in `/backend/services`
- Sample data in `/data` folder

## Notes & Risks
Data layer is pretty straightforward since I'm just working with JSON files. Validation catches the important stuff like negative spending amounts or invalid credit scores. The card data is complete enough to give meaningful recommendations. If spending categories get weird (like someone entering letters instead of numbers), validation stops it.
