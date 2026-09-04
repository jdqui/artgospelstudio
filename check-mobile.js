const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);
  const button = page.locator('button[aria-label="Toggle menu"]');
  console.log('visible', await button.isVisible());
  console.log('before', await button.getAttribute('aria-expanded'));
  await page.evaluate(() => {
    const el = document.querySelector('button[aria-label="Toggle menu"]');
    if (el) el.click();
  });
  await page.waitForTimeout(500);
  console.log('after', await button.getAttribute('aria-expanded'));
  console.log('projectCount', await page.locator('a[href="/projects"]').count());
  console.log('connectCount', await page.locator('a[href="/#connect"]').count());
  await browser.close();
})();
