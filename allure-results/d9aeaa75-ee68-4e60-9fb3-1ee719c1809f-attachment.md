# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\e2e_workflow.spec.js >> E2E Business Workflows >> Complete Form Submission Workflow @e2e
- Location: tests\e2e\e2e_workflow.spec.js:4:3

# Error details

```
TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - heading "Login" [level=1] [ref=e3]
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]: Username
        - textbox "Username" [ref=e8]
        - paragraph [ref=e9]: Please enter username.
      - generic [ref=e10]:
        - generic [ref=e11]: Password
        - textbox "Password" [ref=e12]: BuildingExcellence@111
        - paragraph
      - combobox [ref=e14]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e15]:
        - generic [ref=e16]:
          - radio "Admin" [checked] [ref=e17]
          - generic [ref=e18]: Admin
        - generic [ref=e19]:
          - radio "User" [ref=e20]
          - generic [ref=e21]: User
      - generic [ref=e22]:
        - checkbox "I Agree to the terms and conditions" [checked] [ref=e23]
        - generic [ref=e24]:
          - text: I Agree to the
          - link "terms and conditions" [ref=e26]:
            - /url: "#"
      - button "Sign In" [ref=e28]
      - paragraph [ref=e29]:
        - text: The username is
        - mark [ref=e30]: sagesyntaxacademy
        - text: and the password is
        - mark [ref=e31]: BuildingExcellence@111
        - text: .
  - alert [ref=e32]
```

# Test source

```ts
  1  | const base = require('@playwright/test');
  2  | const { LoginPage } = require('../pages/LoginPage');
  3  | const { HomePage } = require('../pages/HomePage');
  4  | const { FormsPage } = require('../pages/FormsPage');
  5  | const { BasicElementsPage } = require('../pages/BasicElementsPage');
  6  | 
  7  | exports.test = base.test.extend({
  8  |   loginPage: async ({ page }, use) => {
  9  |     await use(new LoginPage(page));
  10 |   },
  11 |   homePage: async ({ page }, use) => {
  12 |     await use(new HomePage(page));
  13 |   },
  14 |   formsPage: async ({ page }, use) => {
  15 |     await use(new FormsPage(page));
  16 |   },
  17 |   basicElementsPage: async ({ page }, use) => {
  18 |     await use(new BasicElementsPage(page));
  19 |   },
  20 |   authenticatedAdminPage: async ({ page }, use) => {
  21 |     const loginPage = new LoginPage(page);
  22 |     await loginPage.navigateToLogin();
  23 |     await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD, true, true);
> 24 |     await page.waitForURL(/.*home.*/);
     |                ^ TimeoutError: page.waitForURL: Timeout 15000ms exceeded.
  25 |     await use(page);
  26 |   }
  27 | });
  28 | 
  29 | exports.expect = base.expect;
  30 | 
```