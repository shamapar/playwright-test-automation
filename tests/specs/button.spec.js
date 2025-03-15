import { test, expect } from '@playwright/test';
import { appUrl } from '../pages/config.js';
import ButtonPage from '../pages/button.page.js';

test.beforeEach('open homepage', async ({ page }) => {

    await page.goto('https://letcode.in/test');

    const buttonPage = new ButtonPage(page);

    await expect(buttonPage.buttonLink).toBeVisible();
    await buttonPage.buttonLink.click();
    await expect(buttonPage.buttonPageTitle).toBeVisible();

})

test('validate Button', async ({ page }) => {
    const buttonPage = new ButtonPage(page);
    await buttonPage.goToHomeButton.click();
    await expect(page).toHaveURL(appUrl);
    await page.goBack();
    await expect(buttonPage.buttonPageTitle).toBeVisible();

})

test('check textbox disable or not', async ({ page }) => {
    const buttonPage = new ButtonPage(page);
    await expect(buttonPage.disabledButton).toBeDisabled();

})


test('long press button', async ({ page }) => {

    const buttonPage = new ButtonPage(page);
    await buttonPage.holdButton.click({ delay: 3000 });
    await expect(buttonPage.holdButton).toHaveText(" Button has been long pressed");

})