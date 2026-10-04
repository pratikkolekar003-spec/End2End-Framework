const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.automationpracticehub.com/');
  await page.getByLabel('Username').fill('sagesyntaxacademy');
  await page.getByLabel('Password').fill('BuildingExcellence@111');
  await page.getByLabel('Admin').check();
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  
  await page.waitForURL(/.*home.*/);
  console.log('Logged in successfully. URL:', page.url());

  // Let's check available links
  const links = await page.locator('a').all();
  const hrefs = [];
  for (const link of links) {
    const href = await link.getAttribute('href');
    if (href && !hrefs.includes(href)) {
      hrefs.push(href);
    }
  }
  console.log('Available links on Home Page:', hrefs);

  // Let's check the cards
  const cards = await page.locator('.grid > div').all();
  const cardNames = [];
  for (const card of cards) {
    const title = await card.locator('h1').innerText();
    cardNames.push(title);
  }
  console.log('Available Modules on Home Page:', cardNames);
  
  // Visit Forms
  console.log('Navigating to Forms...');
  await page.getByRole('heading', { name: 'Forms' }).click();
  await page.waitForLoadState('networkidle');
  console.log('Forms Page URL:', page.url());
  const formsHtml = await page.innerHTML('body');
  fs.writeFileSync(path.join(__dirname, 'forms.html'), formsHtml);
  
  // Visit Basic Elements
  await page.goto('https://www.automationpracticehub.com/home/');
  await page.getByRole('heading', { name: 'Basic Elements' }).click();
  await page.waitForLoadState('networkidle');
  console.log('Basic Elements Page URL:', page.url());
  const basicHtml = await page.innerHTML('body');
  fs.writeFileSync(path.join(__dirname, 'basic.html'), basicHtml);

  // Visit Web Tables
  await page.goto('https://www.automationpracticehub.com/home/');
  await page.getByRole('heading', { name: 'Web Tables' }).click();
  await page.waitForLoadState('networkidle');
  console.log('Web Tables Page URL:', page.url());
  const tablesHtml = await page.innerHTML('body');
  fs.writeFileSync(path.join(__dirname, 'tables.html'), tablesHtml);
  
  await browser.close();
})();
