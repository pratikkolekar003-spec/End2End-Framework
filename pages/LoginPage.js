const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.adminRadio = page.getByLabel('Admin');
    this.userRadio = page.getByLabel('User');
    this.termsCheckbox = page.getByRole('checkbox');
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.errorMessage = page.locator('p.text-\\[red\\]'); // Kept as CSS since it's dynamic generic error text
  }

  async navigateToLogin() {
    await this.navigate('/');
  }

  async login(username, password, asAdmin = true, acceptTerms = true) {
    await this.fillInput(this.usernameInput, username);
    await this.fillInput(this.passwordInput, password);
    
    if (asAdmin) {
      await this.clickElement(this.adminRadio);
    } else {
      await this.clickElement(this.userRadio);
    }

    if (acceptTerms) {
      await this.termsCheckbox.check();
    }

    // Adding a short delay and force click to handle WebKit flakiness on this specific app
    await this.page.waitForTimeout(500);
    await this.signInButton.click({ force: true });
  }
}

module.exports = { LoginPage };
