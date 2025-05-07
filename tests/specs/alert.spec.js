import { test, expect } from '@playwright/test';
import AlertPage from '../pages/alert.page.js';


test.beforeEach('open alert Page', async ({ page }) => {
    const obj = new AlertPage(page);
    await page.goto("https://letcode.in/test");
    const button = obj.alertMethod('Dialog');
    await expect(button).toBeVisible();
    await obj.alertButton.click();
    await expect(obj.pageTitle).toHaveText('Alert');
})

test('Accept alert', async ({ page }) => {

    page.on('dialog', async dialog => {
        expect(dialog.message()).toEqual("Hey! Welcome to LetCode");
        await dialog.accept()
    });

    const obj = new AlertPage(page);
    await obj.acceptButton.click();
})


test('Dismiss Alert', async ({ page }) => {

    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.dismiss()
    });


    const alertPage = new AlertPage(page);
    await alertPage.dismissAlert.click();
})


test('prompt alert', async ({ page }) => {

    page.on('dialog', async (dialog) => {
        await dialog.accept('shama');
    });

    const alertPage = new AlertPage(page);
    await alertPage.prompButton.click();
    await expect(alertPage.promptText).toHaveText("Your name is: shama");

})

test('sweet alert', async ({ page }) => {

    const alertPage = new AlertPage(page);
    await alertPage.sweetAlertButton.click();
    await expect(alertPage.promptTitle).toHaveText("Modern Alert - Some people address me as sweet alert as well");
    await alertPage.popupCloseIcon.click();
})