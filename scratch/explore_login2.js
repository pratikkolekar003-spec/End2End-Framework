const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.automationpracticehub.com/');
  await page.getByLabel('Username').fill('sagesyntaxacademy');
  await page.getByLabel('Password').fill('BuildingExcellence@111');
  await page.getByLabel('Admin').check();
  await page.getByRole('checkbox').check();
  
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.getByRole('button', { name: 'Sign In' }).click()
  ]);
  
  const currentUrl = page.url();
  console.log('Current URL after login:', currentUrl);
  
  const bodyHTML = await page.innerHTML('body');
  fs.writeFileSync('C:\\End2End Framework Playwright\\scratch\\after_login2.html', bodyHTML);
  console.log('HTML written to scratch/after_login2.html');
  
  await browser.close();
})();
