const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.automationpracticehub.com/');
  await page.getByLabel('Username').fill('sagesyntaxacademy');
  await page.getByLabel('Password').fill('BuildingExcellence@111');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  await page.waitForURL(/.*home.*/);
  
  // Navigate to Forms
  await page.goto('https://www.automationpracticehub.com/forms/');
  await page.waitForTimeout(2000);
  console.log("Forms Inputs:", await page.evaluate(() => Array.from(document.querySelectorAll('input, select, textarea, button')).map(el => el.outerHTML.substring(0, 150))));

  // Navigate to Web Tables
  await page.goto('https://www.automationpracticehub.com/tables/');
  await page.waitForTimeout(2000);
  console.log("Tables Inputs:", await page.evaluate(() => Array.from(document.querySelectorAll('input, select, textarea, button')).map(el => el.outerHTML.substring(0, 150))));

  await browser.close();
})();
