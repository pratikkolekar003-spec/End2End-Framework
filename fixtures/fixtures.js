const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { FormsPage } = require('../pages/FormsPage');
const { BasicElementsPage } = require('../pages/BasicElementsPage');

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  formsPage: async ({ page }, use) => {
    await use(new FormsPage(page));
  },
  basicElementsPage: async ({ page }, use) => {
    await use(new BasicElementsPage(page));
  },
  authenticatedAdminPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    const user = process.env.ADMIN_USERNAME || 'sagesyntaxacademy';
    const pass = process.env.ADMIN_PASSWORD || 'BuildingExcellence@111';
    
    await loginPage.login(user, pass, true, true);
    const homePage = new HomePage(page);
    
    try {
      await base.expect(homePage.successMessage).toBeVisible({ timeout: 10000 });
    } catch (e) {
      if (await loginPage.signInButton.isVisible()) {
        throw new Error(`Login failed in CI. Login form is still visible. Credentials check - User length: ${user.length}, Pass length: ${pass.length}`);
      }
      throw e;
    }
    
    await use(page);
  }
});

exports.expect = base.expect;
