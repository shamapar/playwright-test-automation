import { test, expect } from '@playwright/test';
test.beforeEach('navigating homepage', async ({ page }) => {
    await page.goto("https://letcode.in/test");

    await expect(page.locator("//*[normalize-space(text())='Window']")).toBeVisible();
    await page.locator('//*[@href="/window"]').click();
    await expect(page.locator("//*[normalize-space(text())='Windows']")).toHaveText("Windows");

})
test('test Homepage window', async ({ page }) => {

    await page.locator('#home').click();


})