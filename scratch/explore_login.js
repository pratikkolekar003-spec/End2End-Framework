const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.automationpracticehub.com/');
  await page.fill('#username', 'sagesyntaxacademy');
  await page.fill('#password', 'BuildingExcellence@111');
  await page.check('#admin');
  await page.check('#terms');
  await page.click('button[type="submit"]');
  
  await page.waitForTimeout(2000); // wait for navigation
  
  const currentUrl = page.url();
  console.log('Current URL after login:', currentUrl);
  
  const bodyHTML = await page.innerHTML('body');
  fs.writeFileSync('C:\\End2End Framework Playwright\\scratch\\after_login.html', bodyHTML);
  console.log('HTML written to scratch/after_login.html');
  
  await browser.close();
})();
