import { test, expect } from '@playwright/experimental-ct-react';
import Header from '../header';
import App from '../App'

test.use({ viewport: { width: 1000, height: 500 } });

test('All components should work', async ({ mount, page }) => {
  const component = await mount(<App />);
  await expect(component).toContainText('My First Component');
  await expect(page.locator("[qa-id='header-component']")).toHaveText("Page Header in Testing Component")

  // page.close();
  await page.waitForTimeout(5000);
});

test.skip('App should work', async ({ mount }) => {
  const component = await mount(<App></App>);
  await expect(component).toContainText('My First Component');
});

// import { test, expect } from "@playwright/experimental-ct-react";
// import App from '../../src/App'
// // import Header from '../../src/header'

// test.use({viewport: { width: 500, height: 500 }});
// test("should work", async ({ mount }) => {
//     const component = await mount(<App></App>);
//     await expect(component).toContainText('Learn React')
//     //await timeo
//     });
// import { test, expect } from "@playwright/experimental-ct-react";
// // import Header from "../../src/header";
// import App from "../../src/App";

// test("App should work", async ({ mount }) => {
//   const component = await mount(<App></App>);
//   await expect(component).toContainText("My First Component");
// });

// test("Login test demo", async ({ page}) => {

//     //go to login page
//     await page.goto("/login?role=educator");
//     await page.hover(`h3[class^='TitleStyled-']`);
//     await page.waitForTimeout(5000);
//     await page.getByPlaceholder('Enter your email').fill('manh+edu1@gotitapp.co');
//     await page.getByPlaceholder('Enter your email').press('Tab');
//     await page.locator(`input[placeholder='Enter your password']`).fill('Aa123456@');
//     //click by css selector
//     // await page.getByRole('button', { name: 'Log In' }).first().click();
//     //click by text
//     await page.click("'Log in'");
//     await expect(page.getByRole('main')).toContainText('Manage your courses and students, all in one place!');

//     await page.waitForTimeout(3000);

// });
