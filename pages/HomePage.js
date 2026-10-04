const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.successMessage = page.getByText('Login Successful');
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.basicElementsCard = page.locator('div.cursor-pointer').filter({ has: page.getByRole('heading', { name: 'Basic Elements' }) });
    this.formsCard = page.locator('div.cursor-pointer').filter({ has: page.getByRole('heading', { name: 'Forms' }) });
    // Other cards can be added similarly
  }

  async isLoginSuccessful() {
    return await this.isElementVisible(this.successMessage);
  }

  async logout() {
    await this.clickElement(this.logoutButton.first());
    await this.page.waitForNavigation();
  }

  async navigateToBasicElements() {
    await this.clickElement(this.basicElementsCard);
  }
}

module.exports = { HomePage };
