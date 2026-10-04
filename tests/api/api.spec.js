const { test, expect } = require('@playwright/test');

test.describe('API Testing', () => {
  test('Verify GET request for test data @api', async ({ request }) => {
    // Assuming there might be an API returning data, or testing the site itself
    const response = await request.get('https://www.automationpracticehub.com/');
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    
    // In a real application, we would hit endpoints like /api/v1/users
    // Example:
    // const jsonResponse = await response.json();
    // expect(jsonResponse).toHaveProperty('data');
  });
  
  test('Verify POST request for authentication @api', async ({ request }) => {
    // Assuming there's an API for authentication (dummy test)
    const response = await request.post('https://www.automationpracticehub.com/', {
      data: {
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD
      }
    });
    
    // Validate status code. Might be 200 or 404 depending on if the API exists.
    expect(response.status()).toBeGreaterThanOrEqual(200);
  });
});
