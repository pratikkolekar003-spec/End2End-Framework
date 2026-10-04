class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '') {
    await this.page.goto(path);
  }

  async clickElement(locator) {
    await locator.click();
  }

  async fillInput(locator, text) {
    await locator.fill(text);
  }

  async getElementText(locator) {
    return await locator.innerText();
  }

  async waitForElement(locator, state = 'visible') {
    await locator.waitFor({ state });
  }

  async isElementVisible(locator) {
    return await locator.isVisible();
  }
}

module.exports = { BasePage };
