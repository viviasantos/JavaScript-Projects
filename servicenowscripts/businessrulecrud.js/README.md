
Description: This project demonstrates how to implement CRUD (Create, Read, Update, Delete) operations using Business Rules in ServiceNow, specifically for the Incident table. The goal was to create automated workflows within ServiceNow that allow you to create, update, and delete incident records in response to specific triggers. The project includes several Business Rules that perform various tasks based on certain conditions, helping to automate and streamline incident management in ServiceNow.

# What This Project Does:
- Creates new incident records automatically when specific conditions are met using Business Rules.
- Updates existing incident records, modifying fields like state or priority based on triggers.
- Deletes incident records when certain criteria are fulfilled (e.g., state is "Closed").
- Uses GlideRecord to query and manipulate data in the Incident table.
- Applies gs.info() to log actions for better visibility and debugging.
- Executes logic in real-time as data is inserted, updated, or deleted.
- Demonstrates Create, Update, and Delete logic through separate Business Rules.
  
# Tools & Technologies Used:
ServiceNow Business Rules, 
ServiceNow GlideRecord, 
JavaScript, 
Visual Studio Code, 
ServiceNow Platform, 

---
