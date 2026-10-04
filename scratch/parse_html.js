const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Read basic.html
  await page.setContent(fs.readFileSync('scratch/basic.html', 'utf8'));
  console.log("--- Basic Elements ---");
  console.log("Inputs:", await page.evaluate(() => Array.from(document.querySelectorAll('input, select, textarea, button')).map(el => el.outerHTML.substring(0, 150))));
  
  // Read forms.html
  await page.setContent(fs.readFileSync('scratch/forms.html', 'utf8'));
  console.log("--- Forms ---");
  console.log("Inputs:", await page.evaluate(() => Array.from(document.querySelectorAll('input, select, textarea, button')).map(el => el.outerHTML.substring(0, 150))));

  // Read tables.html
  await page.setContent(fs.readFileSync('scratch/tables.html', 'utf8'));
  console.log("--- Tables ---");
  console.log("Inputs:", await page.evaluate(() => Array.from(document.querySelectorAll('input, select, textarea, button')).map(el => el.outerHTML.substring(0, 150))));
  console.log("Table headers:", await page.evaluate(() => Array.from(document.querySelectorAll('th')).map(el => el.innerText)));
  
  await browser.close();
})();
