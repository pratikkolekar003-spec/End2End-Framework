# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.js >> Login Functionality - Data Driven >> Login Test: Valid Admin Login
- Location: tests\ui\login.spec.js:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Login Successful')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Login Successful') with timeout 5000ms
  - waiting for getByText('Login Successful')

```

```yaml
- heading "Login" [level=1]
- text: Username
- textbox "Username": sagesyntaxacademy
- paragraph
- text: Password
- textbox "Password": BuildingExcellence@111
- paragraph
- combobox:
  - option "Student" [selected]
  - option "Teacher"
  - option "Consultant"
- radio "Admin" [checked]
- text: Admin
- radio "User"
- text: User
- checkbox "I Agree to the terms and conditions" [checked]
- text: I Agree to the
- link "terms and conditions":
  - /url: "#"
- button "Sign In"
- paragraph:
  - text: The username is
  - mark: sagesyntaxacademy
  - text: and the password is
  - mark: BuildingExcellence@111
  - text: .
- alert
```

# Test source

```ts
  1  | const { test, expect } = require('../../fixtures/testBase');
  2  | const { JSONReader } = require('../../utils/jsonReader');
  3  | 
  4  | const loginData = JSONReader.readData('loginData.json');
  5  | 
  6  | test.describe('Login Functionality - Data Driven', () => {
  7  |   for (const data of loginData) {
  8  |     test(`Login Test: ${data.testCase}`, async ({ loginPage, homePage }) => {
  9  |       await loginPage.navigateToLogin();
  10 |       
  11 |       // Perform login
  12 |       await loginPage.login(data.username, data.password, data.asAdmin, data.acceptTerms);
  13 | 
  14 |       if (data.expectedSuccess) {
  15 |         // Assert successful login by checking success message or URL
> 16 |         await expect(homePage.successMessage).toBeVisible();
     |                                               ^ Error: expect(locator).toBeVisible() failed
  17 |         
  18 |         // Wait for URL to change to home
  19 |         await homePage.page.waitForURL(/.*home.*/);
  20 |         expect(homePage.page.url()).toContain('/home');
  21 |       } else {
  22 |         // Wait for potential error message or check if still on login page
  23 |         // Wait for a short time to ensure it doesn't navigate
  24 |         await loginPage.page.waitForTimeout(1000);
  25 |         await expect(loginPage.page).not.toHaveURL(/.*home.*/);
  26 |       }
  27 |     });
  28 |   }
  29 | });
  30 | 
```