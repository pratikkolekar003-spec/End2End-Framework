const { test, expect } = require('../../fixtures/fixtures');

test.describe('E2E Business Workflows', () => {
  test('Complete Form Submission Workflow @e2e', async ({ authenticatedAdminPage, homePage, formsPage }) => {
    // Navigate to Forms from Home
    await homePage.clickElement(homePage.formsCard);
    await expect(homePage.page).toHaveURL(/.*forms.*/);
    
    // Fill the form
    await formsPage.fillForm({
      name: 'John Doe',
      password: 'SecurePassword123!',
      email: 'johndoe@example.com',
      age: '30',
      phone: '+91 9999999999',
      website: 'https://johndoe.com',
      message: 'This is an end to end test message.'
    });

    await formsPage.selectModes('automation');
    await formsPage.toggleTerms(true);

    // Submit form
    await formsPage.submitForm();
    
    // The exact success logic can be asserted here if there is a success message or navigation
    // Wait for network idle or assert UI state
    await homePage.page.waitForTimeout(1000); 
  });
});
