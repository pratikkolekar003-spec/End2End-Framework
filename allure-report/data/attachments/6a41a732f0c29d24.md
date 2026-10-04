# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\e2e_workflow.spec.js >> E2E Business Workflows >> Complete Form Submission Workflow @e2e
- Location: tests\e2e\e2e_workflow.spec.js:4:3

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*forms.*/
Received string:  "https://www.automationpracticehub.com/home"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.automationpracticehub.com/home"

```

```yaml
- alert
- banner:
  - link "Logo":
    - /url: /home/
    - img "Logo"
  - navigation:
    - list:
      - link "Home":
        - /url: /home/
        - listitem: Home
      - link "Products":
        - /url: /products/
        - listitem: Products
      - link "Cart":
        - /url: /cart/
        - listitem:
          - text: Cart
          - superscript
      - link "Contact":
        - /url: /contact/
        - listitem: Contact
      - link "My Orders":
        - /url: /orders/
        - listitem: My Orders
      - listitem:
        - button "Logout"
- text: Login Successful 🎉
- main:
  - text: Practice with, Sage Syntax Academy
  - img
  - heading "Basic Elements" [level=1]
  - paragraph: Buttons, Text, Links & Images
  - img
  - heading "Forms" [level=1]
  - paragraph: Input Fields, Checkbox, Radio & Submit
  - img
  - heading "Alerts & Frames" [level=1]
  - paragraph: Popups, iFrames & Window Handling
  - img
  - heading "Widgets" [level=1]
  - paragraph: Dropdowns, Datepicker & Sliders
  - img
  - heading "User Interactions" [level=1]
  - paragraph: Drag & Drop, Hover & Resize
  - img
  - heading "Web Tables" [level=1]
  - paragraph: Dynamic Tables & Data Validation
  - img
  - heading "File Handling" [level=1]
  - paragraph: Upload & Download Automation
  - img
  - heading "Authentication" [level=1]
  - paragraph: Login, Logout & Session Management
  - img
  - heading "API Testing" [level=1]
  - paragraph: GET, POST & Response Validation
  - img
  - heading "Broken Links" [level=1]
  - paragraph: Link & Image Validation Testing
- complementary: Google Ads
- contentinfo: Copyright © SageSyntaxAcademy 2026
```

# Test source

```ts
  1  | const { test, expect } = require('../../fixtures/fixtures');
  2  | 
  3  | test.describe('E2E Business Workflows', () => {
  4  |   test('Complete Form Submission Workflow @e2e', async ({ authenticatedAdminPage, homePage, formsPage }) => {
  5  |     // Navigate to Forms from Home
  6  |     await homePage.page.getByRole('heading', { name: 'Forms' }).click();
> 7  |     await expect(homePage.page).toHaveURL(/.*forms.*/);
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  8  |     
  9  |     // Fill the form
  10 |     await formsPage.fillForm({
  11 |       name: 'John Doe',
  12 |       password: 'SecurePassword123!',
  13 |       email: 'johndoe@example.com',
  14 |       age: '30',
  15 |       phone: '+91 9999999999',
  16 |       website: 'https://johndoe.com',
  17 |       message: 'This is an end to end test message.'
  18 |     });
  19 | 
  20 |     await formsPage.selectModes('automation');
  21 |     await formsPage.toggleTerms(true);
  22 | 
  23 |     // Submit form
  24 |     await formsPage.submitForm();
  25 |     
  26 |     // The exact success logic can be asserted here if there is a success message or navigation
  27 |     // Wait for network idle or assert UI state
  28 |     await homePage.page.waitForTimeout(1000); 
  29 |   });
  30 | });
  31 | 
```