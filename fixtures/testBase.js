const baseTest = require('@playwright/test').test;
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');

const test = baseTest.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

module.exports = { test, expect: baseTest.expect };
