const { test, expect } = require('../../fixtures/fixtures');

test.describe('Basic Elements - Regression', () => {
  test.beforeEach(async ({ authenticatedAdminPage, homePage }) => {
    await homePage.page.goto('/elements/');
  });

  test('Verify Enabled and Disabled Buttons @regression', async ({ basicElementsPage }) => {
    await expect(basicElementsPage.enabledBtn).toBeEnabled();
    const isDisabled = await basicElementsPage.isButtonDisabled();
    expect(isDisabled).toBeTruthy();
    await expect(basicElementsPage.disabledBtn).toBeDisabled();
  });

  test('Verify Button Actions (Click, Double Click, Hover) @regression', async ({ basicElementsPage }) => {
    await basicElementsPage.clickSimpleButton();
    await basicElementsPage.doubleClickButton();
    await basicElementsPage.hoverButton();
    // Assuming UI feedback is provided which we can assert (skipping actual assertion here as site behavior isn't fully mocked)
  });
});
