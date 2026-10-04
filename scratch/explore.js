const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.automationpracticehub.com/');
  const bodyHTML = await page.innerHTML('body');
  console.log(bodyHTML);
  await browser.close();
})();
