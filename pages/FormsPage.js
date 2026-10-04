const { BasePage } = require('./BasePage');

class FormsPage extends BasePage {
  constructor(page) {
    super(page);
    this.nameInput = page.getByPlaceholder('Enter your name');
    this.passwordInput = page.getByPlaceholder('Enter password');
    this.emailInput = page.getByPlaceholder('example@email.com');
    this.ageInput = page.getByPlaceholder('Enter age');
    this.phoneInput = page.getByPlaceholder('+91 999999xxxx');
    this.websiteInput = page.getByPlaceholder('https://example.com');
    this.messageTextarea = page.getByPlaceholder('Write your message');
    
    this.termsCheckbox = page.locator('#terms-checkbox');
    this.subscribeCheckbox = page.locator('#subscribe-checkbox');
    this.updatesCheckbox = page.locator('#updates-checkbox');
    
    this.manualModeRadio = page.locator('#manual-mode');
    this.automationModeRadio = page.locator('#automation-mode');
    
    this.testingLevelSelect = page.locator('#testing-level');
    
    this.submitButton = page.getByRole('button', { name: 'Submit Form' });
    this.resetButton = page.getByRole('button', { name: 'Reset Form' });
  }

  async fillForm(data) {
    if (data.name) await this.fillInput(this.nameInput, data.name);
    if (data.password) await this.fillInput(this.passwordInput, data.password);
    if (data.email) await this.fillInput(this.emailInput, data.email);
    if (data.age) await this.fillInput(this.ageInput, data.age);
    if (data.phone) await this.fillInput(this.phoneInput, data.phone);
    if (data.website) await this.fillInput(this.websiteInput, data.website);
    if (data.message) await this.fillInput(this.messageTextarea, data.message);
  }

  async selectModes(mode) {
    if (mode === 'manual') await this.clickElement(this.manualModeRadio);
    else if (mode === 'automation') await this.clickElement(this.automationModeRadio);
  }

  async toggleTerms(accept) {
    if (accept) {
      await this.termsCheckbox.check();
    } else {
      await this.termsCheckbox.uncheck();
    }
  }

  async submitForm() {
    await this.clickElement(this.submitButton);
  }

  async resetForm() {
    await this.clickElement(this.resetButton);
  }
}

module.exports = { FormsPage };
