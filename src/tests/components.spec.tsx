import { test, expect } from "@playwright/experimental-ct-react";
import Header from "../../src/header";
// import App from '../../src/App'

test.use({ viewport: { width: 1000, height: 500 } });

test("Header should work", async ({ mount, page }) => {
  const component = await mount(<Header />);
  await expect(component).toContainText("Page Header in Testing Component");
  await expect(page.locator("[qa-id='header-component']")).toHaveText(
    "Page Header in Testing Component"
  );

  //take screenshot
  await page.screenshot({ path: 'screenshots/screenshot.png' });

  //visual testing
  await expect(page.locator("header>h1")).toHaveScreenshot();
  
  // page.close();
  await page.waitForTimeout(5000);
});

test.skip("App should work", async ({ mount, page }) => {
  const component = await mount(<Header></Header>);
  await expect(page.locator("[qa-id='header-component']")).toHaveText(
    "Page Header in Testing Component"
  );
  await page.waitForTimeout(5000);
});
