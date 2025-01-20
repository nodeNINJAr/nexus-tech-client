# Nexus Tech

Nexus Tech is a comprehensive **Employee Management System** (EMS) designed to manage employees, HR, and administrative operations efficiently. The platform ensures seamless workflows, secure role-based access, and robust data management for businesses.

---

## Website Details

- **Website Name**: Nexus Tech
- **Admin Email**: suzume99@gmail.com 
- **Admin Password**: Pa$$w0rd! 
- **Live Site URL**: [https://nexustech-b3673.web.app](https://nexustech-b3673.web.app)

---

## Key Features

### Registration & Authentication
1. **Email/Password Registration**:
   - Dropdown to select roles: `Employee` or `HR` (Admin cannot register via UI).
   - Fields: Name, Email, Password, Role, Photo Upload (using imgbb).
   - Upon registration, a modal will appear prompting users to enter:
     - **Bank Account No**
     - **Salary**
     - **Designation**
     - These values are mandatory and stored in the database.
2. **Social Login**:
   - Supports Google/GitHub login. Social logins default to the `Employee` role.
   - Users logging in via social platforms will be required to fill out the modal with the above details during their login.
3. **Role-Specific Dashboards**:
   - Separate access routes and functionality for `Employee`, `HR`, and `Admin`.

### Employee Dashboard
- **/work-sheet**:
  - Submit work logs using a form (Tasks, Hours Worked, Date).
  - View, edit, and delete work entries in a table.
  - Updates and delete reflect immediately without page reload.
- **/payment-history**:
  - View salary payment history with pagination for more than five rows.

### HR Dashboard
- **/employee-list**:
  - Manage employee data (verify status, pay salaries).
  - View detailed employee profiles and salary analytics.
- **/progress**:
  - Monitor all employee work records with filters for employees and months and showing total worked hour

### Admin Dashboard
- **/all-employee-list**:
  - Manage employees and HR roles (fire, promote to HR).
  - Adjust salaries (increase only).
- **/payroll**:
  - Approve payment requests from HR and ensure no duplicate payments for the same month/year.

### Contact Us
- **/contact-us**:
  - A public page with a company address and a form to collect visitor feedback.
  - Admins can view messages in their dashboard.

---

## Tech Stack

- **Frontend**: React, Ant Design
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication
- **Payment Gateway**: Stripe

---
