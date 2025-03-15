import { test, expect } from '@playwright/test';
import { appUrl } from '../pages/config.js';

test.beforeEach('open homepage', async ({ page }) => {

    await page.goto(appUrl.concat("test"));
    const button = page.locator("//p[normalize-space(text())='Button']");
    await expect(button).toBeVisible();
    await page.locator("//a[@href='/button']").click();
    const buttonTitle = page.locator("//h1[text()='Button']");
    expect(buttonTitle).toBeVisible();
})

test('validate Button', async ({ page }) => {

    const GoToHome = page.locator("#home");
    await GoToHome.click();
    await expect(page).toHaveURL(appUrl);
    await page.goBack();
    const buttonTitle = page.locator("//h1[text()='Button']");
    expect(buttonTitle).toBeVisible();

})

test('check textbox disable or not', async ({ page }) => {

    const disabledBox = page.locator('//button[contains(@title,"Disabled") and @id="isDisabled"]');
    await expect(disabledBox).toBeDisabled();

})


test('long press button', async ({ page }) => {

    const holdBtn = page.locator('//button[@id="isDisabled" and contains(@class,"primary")]');
    await holdBtn.click({ delay: 3000 });
    await expect(holdBtn).toHaveText(" Button has been long pressed");

})