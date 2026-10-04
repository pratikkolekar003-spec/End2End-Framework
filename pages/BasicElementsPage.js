const { BasePage } = require('./BasePage');

class BasicElementsPage extends BasePage {
  constructor(page) {
    super(page);
    this.updateBtn = page.getByRole('button', { name: 'Update Status' });
    this.showTextBtn = page.getByRole('button', { name: 'Show Hidden Text' });
    this.simpleBtn = page.getByRole('button', { name: 'Click Me', exact: true });
    this.doubleClickBtn = page.getByRole('button', { name: 'Double Click Me' });
    this.hoverBtn = page.getByRole('button', { name: 'Hover Me' });
    this.resetBtn = page.getByRole('button', { name: 'Reset' });
    this.enabledBtn = page.getByRole('button', { name: 'Enabled Button' });
    this.disabledBtn = page.getByRole('button', { name: 'Disabled Button' });
    
    this.decrementBtn = page.getByRole('button', { name: '- Decrease' });
    this.incrementBtn = page.getByRole('button', { name: 'Increase +' });
  }

  async clickSimpleButton() {
    await this.clickElement(this.simpleBtn);
  }

  async doubleClickButton() {
    await this.doubleClickBtn.dblclick();
  }

  async hoverButton() {
    await this.hoverBtn.hover();
  }

  async isButtonDisabled() {
    return await this.disabledBtn.isDisabled();
  }

  async clickIncrement() {
    await this.clickElement(this.incrementBtn);
  }

  async clickDecrement() {
    await this.clickElement(this.decrementBtn);
  }
}

module.exports = { BasicElementsPage };
