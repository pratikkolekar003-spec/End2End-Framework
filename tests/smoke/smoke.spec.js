const { test, expect } = require('../../fixtures/fixtures');

test.describe('Smoke Suite', () => {
  test('Valid Login @smoke', async ({ page, loginPage, homePage }) => {
    await loginPage.navigateToLogin();
    await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD, true, true);
    await expect(page).toHaveURL(/.*home.*/, { timeout: 15000 });
    expect(await homePage.isLoginSuccessful()).toBeTruthy();
  });
});
