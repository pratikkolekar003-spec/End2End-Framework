const { test, expect } = require('../../fixtures/testBase');
const { JSONReader } = require('../../utils/jsonReader');

const loginData = JSONReader.readData('loginData.json');

test.describe('Login Functionality - Data Driven', () => {
  for (const data of loginData) {
    test(`Login Test: ${data.testCase}`, async ({ loginPage, homePage }) => {
      await loginPage.navigateToLogin();
      
      // Perform login
      await loginPage.login(data.username, data.password, data.asAdmin, data.acceptTerms);

      if (data.expectedSuccess) {
        // Assert successful login by checking success message or URL
        await expect(homePage.successMessage).toBeVisible({ timeout: 15000 });
        
        // Wait for logout button as indicator of successful login
        await expect(homePage.logoutButton).toBeVisible();
      } else {
        // Wait for potential error message or check if still on login page
        // Wait for a short time to ensure it doesn't navigate
        await loginPage.page.waitForTimeout(1000);
        await expect(homePage.logoutButton).toBeHidden();
      }
    });
  }
});
