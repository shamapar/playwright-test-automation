import { test, expect, chromium, selectors } from '@playwright/test';
import Windowspage from '../pages/windows.page';

test.skip('navigating homepage', async ({ page }) => {
    await page.goto("https://letcode.in/test");

    await expect(page.locator("//*[normalize-space(text())='Window']")).toBeVisible();
    await page.locator('//*[@href="/window"]').click();
    await expect(page.locator("//*[normalize-space(text())='Windows']")).toHaveText("Windows");

})
test('test Homepage window', async ({ page, context }) => {
    await page.goto("https://the-internet.herokuapp.com/windows");
    const windowpage = new Windowspage(page);
    await windowpage.newpageButton.click();
    const newpage = await context.waitForEvent('page');
    await expect(newpage.locator('//h3')).toHaveText('New Window');
    console.log(await newpage.locator('//h3').innerText());

    // await page.locator('#multi').click();
    // const newPage1 = await context.waitForEvent('page');

    // console.log('all pages', context.pages().length)
    // await expect(newPage1.locator('//h1')).toHaveText('Alert');

})