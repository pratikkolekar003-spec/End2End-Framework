# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\login.spec.js >> Login Functionality - Data Driven >> Login Test: Valid Admin Login
- Location: tests\ui\login.spec.js:8:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - heading "Login" [level=1] [ref=e3]
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]: Username
        - textbox "Username" [ref=e8]: sagesyntaxacademy
        - paragraph
      - generic [ref=e9]:
        - generic [ref=e10]: Password
        - textbox "Password" [ref=e11]: BuildingExcellence@111
        - paragraph
      - combobox [ref=e13]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e14]:
        - generic [ref=e15]:
          - radio "Admin" [checked] [ref=e16]
          - generic [ref=e17]: Admin
        - generic [ref=e18]:
          - radio "User" [ref=e19]
          - generic [ref=e20]: User
      - generic [ref=e21]:
        - checkbox "I Agree to the terms and conditions" [checked] [ref=e22]
        - generic [ref=e23]:
          - text: I Agree to the
          - link "terms and conditions" [ref=e25]:
            - /url: "#"
      - button "Signing..." [ref=e27]
      - paragraph [ref=e28]:
        - text: The username is
        - mark [ref=e29]: sagesyntaxacademy
        - text: and the password is
        - mark [ref=e30]: BuildingExcellence@111
        - text: .
  - alert [ref=e32]
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
  16 |         const isSuccessVisible = await homePage.isLoginSuccessful();
> 17 |         expect(isSuccessVisible).toBeTruthy();
     |                                  ^ Error: expect(received).toBeTruthy()
  18 |         
  19 |         // Wait for URL to change to home
  20 |         await homePage.page.waitForURL(/.*home.*/);
  21 |         expect(homePage.page.url()).toContain('/home');
  22 |       } else {
  23 |         // Wait for potential error message or check if still on login page
  24 |         // Wait for a short time to ensure it doesn't navigate
  25 |         await loginPage.page.waitForTimeout(1000);
  26 |         await expect(loginPage.page).not.toHaveURL(/.*home.*/);
  27 |       }
  28 |     });
  29 |   }
  30 | });
  31 | 
```