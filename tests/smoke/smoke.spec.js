const { test, expect } = require('../../fixtures/fixtures');

test.describe('Smoke Suite', () => {
  test('Valid Login @smoke', async ({ page, loginPage, homePage }) => {
    await loginPage.navigateToLogin();
    const user = process.env.ADMIN_USERNAME || '';
    const pass = process.env.ADMIN_PASSWORD || '';
    await loginPage.login(user, pass, true, true);
    
    try {
      await expect(homePage.successMessage).toBeVisible({ timeout: 10000 });
    } catch (e) {
      if (await loginPage.signInButton.isVisible()) {
        throw new Error(`Login failed in CI. Login form is still visible. Credentials check - User length: ${user.length}, Pass length: ${pass.length}`);
      }
      throw e;
    }
    expect(await homePage.isLoginSuccessful()).toBeTruthy();
  });
});
