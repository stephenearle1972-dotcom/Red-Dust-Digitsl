const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const SCREENSHOT_DIR = path.join(__dirname, '..', 'screenshots');

const sites = [
  { name: 'askari', url: 'https://askariphoto.netlify.app/', waitFor: 3000 },
  { name: 'dcj', url: 'https://dcjtraining.co.za/', waitFor: 3000 },
  { name: 'townconnect', url: 'https://townconnect.co.za/', waitFor: 3000 },
  { name: 'menlynconnect', url: 'https://menlynconnect.co.za/', waitFor: 3000 },
];

async function run() {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });

  for (const site of sites) {
    console.log(`\nScreenshotting ${site.name} (${site.url})...`);

    // Desktop screenshot
    const desktopCtx = await browser.newContext({
      viewport: { width: 1920, height: 1080 },
      deviceScaleFactor: 1,
    });
    const desktopPage = await desktopCtx.newPage();
    try {
      await desktopPage.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
    } catch (e) {
      console.log(`  Warning: networkidle timeout for ${site.name}, continuing...`);
    }
    await desktopPage.waitForTimeout(site.waitFor);
    const desktopPath = path.join(SCREENSHOT_DIR, `${site.name}-desktop.png`);
    await desktopPage.screenshot({ path: desktopPath, fullPage: false });
    console.log(`  Desktop saved: ${desktopPath}`);
    await desktopCtx.close();

    // Mobile screenshot
    const mobileCtx = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
    });
    const mobilePage = await mobileCtx.newPage();
    try {
      await mobilePage.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
    } catch (e) {
      console.log(`  Warning: networkidle timeout for ${site.name} mobile, continuing...`);
    }
    await mobilePage.waitForTimeout(site.waitFor);
    const mobilePath = path.join(SCREENSHOT_DIR, `${site.name}-mobile.png`);
    await mobilePage.screenshot({ path: mobilePath, fullPage: false });
    console.log(`  Mobile saved: ${mobilePath}`);
    await mobileCtx.close();
  }

  await browser.close();
  console.log('\nAll screenshots saved to:', SCREENSHOT_DIR);
}

run().catch(console.error);
