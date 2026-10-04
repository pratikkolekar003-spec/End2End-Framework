# Comprehensive Test Scenario Matrix
Application: https://www.automationpracticehub.com/

## 1. Authentication Module
- **Positive Scenarios:**
  - Login with valid credentials.
- **Negative Scenarios:**
  - Login with invalid username.
  - Login with invalid password.
  - Login with invalid username and password.
  - Login with empty fields.
- **Validation Scenarios:**
  - Verify error messages for missing credentials.
- **End-to-End Scenarios:**
  - Successful login followed by navigation to Dashboard and then logout.

## 2. Basic Elements Module
- **Positive Scenarios:**
  - Click enabled buttons and verify action/state change.
  - Perform double click on "Double Click Me" button.
  - Hover over the "Hover Me" button and verify behavior.
  - Click the "Increase/Decrease" buttons and verify count update.
- **Negative Scenarios:**
  - Attempt to click the "Disabled Button" and ensure no action triggers.
- **Validation Scenarios:**
  - Verify presence and behavior of hidden buttons.

## 3. Forms Module
- **Positive Scenarios:**
  - Submit form with all valid fields (First Name, Last Name, Email, Gender, Hobbies).
  - Submit form with only minimum mandatory fields.
- **Negative Scenarios:**
  - Submit form with missing mandatory fields (Verify validation messages).
  - Enter invalid email format and verify validation.
- **Validation Scenarios:**
  - Validate that clearing the form resets all input fields to default states.

## 4. Web Tables Module
- **Positive Scenarios:**
  - Verify table headers match expected names (ID, Name, Role, Status, etc.).
  - Extract and verify data for specific rows.
  - Perform search inside the table and verify results are filtered.
  - Sort table by "Age" and verify ascending/descending order.
- **Negative Scenarios:**
  - Search for non-existing record and verify "No results found" (or similar).
- **CRUD Operations:**
  - Add a new row to the table.
  - Verify new row exists.

## 5. Alerts & Frames Module (Placeholder)
- **Positive Scenarios:**
  - Trigger Alert, confirm message, and accept.
  - Trigger Confirm dialog and accept/dismiss.
  - Trigger Prompt, enter text, and verify text appears on page.

## 6. End-to-End Business Workflows
- **Workflow 1: Standard User Journey**
  - Open Application -> Login -> Navigate to Forms -> Fill Form -> Submit -> Verify Success -> Logout.
- **Workflow 2: Data Validation Journey**
  - Open Application -> Login -> Navigate to Web Tables -> Add Row -> Search Row -> Verify Row Data -> Logout.
