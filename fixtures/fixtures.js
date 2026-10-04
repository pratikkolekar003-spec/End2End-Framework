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
    await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD, true, true);
    const homePage = new HomePage(page);
    await base.expect(homePage.logoutButton).toBeVisible({ timeout: 15000 });
    await use(page);
  }
});

exports.expect = base.expect;
