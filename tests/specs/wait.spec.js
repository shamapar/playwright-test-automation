import { test, expect, chromium, selectors } from '@playwright/test';
import Waitpage from '../pages/wait.page.js';
import { TIMEOUT } from 'dns';


test('test example 1', async ({ page, context }) => {

    await page.goto("https://the-internet.herokuapp.com/dynamic_loading");
    const waitpage = new Waitpage(page);
    await waitpage.examplebutton1.click();
    await expect(waitpage.resultafterwait, { timeout: 5000 }).not.toBeVisible();
    await waitpage.buttonlink.click();
    await waitpage.loading.waitFor({ state: 'visible' })
    await waitpage.loading.waitFor({ state: "hidden" });
    await expect(waitpage.resultafterwait).toContainText("Hello World!");
})

test('Test Example 2', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading");
    const waitpage = new Waitpage(page);
    await waitpage.examplebutton2.click();
    await expect(waitpage.dynamicallyloadedPage1).toContainText("Example 2");
    await waitpage.buttonlink.click();
    await expect(waitpage.resultafterwait).not.toBeVisible();
    await waitpage.loading.waitFor({ state: 'visible' })
    await waitpage.loading.waitFor({ state: "hidden" });
    await expect(waitpage.resultafterwait).toContainText("Hello World!");
})

test.only('accept dialog box', async ({ page }) => {
    await page.goto("https://letcode.in/waits");
    page.on('dialog', async dialog => {
        expect(dialog.message()).toEqual("Finally I'm here, just to say Hi :)")
        dialog.accept()
    })

    await page.getByRole('button', { name: 'Simple Alert' }).click();
    await page.waitForEvent('dialog');
})