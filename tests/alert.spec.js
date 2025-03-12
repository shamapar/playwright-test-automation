import { test, expect } from '@playwright/test';
import { notification } from './config';

test.beforeEach('open alert Page', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    const button = page.locator(notification('Dialog'));
    await expect(button).toBeVisible();
    await page.locator("//a[@href='/alert']").click();
    const pageTitle = page.locator("//h1");
    await expect(pageTitle).toHaveText('Alert');
})

test('Accept alert', async ({ page }) => {

    page.on('dialog', async dialog => {
        expect(dialog.message()).toEqual("Hey! Welcome to LetCode");
        await dialog.accept()
    });

    await page.locator("#accept").click();

})


test('Dismiss Alert', async ({ page }) => {

    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.dismiss()
    });

    await page.locator("#confirm").click();

})


test('prompt alert', async ({ page }) => {

    await page.getByRole('button', { name: "Prompt Alert" }).click();

    page.on('dialog', async (dialog) => {
        await dialog.accept('shama');
    });

    await expect(page.locator('#myName')).toHaveText("Your name is: shama");

})

test.only('sweet alert', async ({ page }) => {

    await page.getByRole("button", { name: "Modern Alert" }).click();
    const promptTitle = page.locator('//*[@class="modal-content"]//p');
    // console.log(await promptTitle.innerText())
    await expect(promptTitle).toHaveText("Modern Alert - Some people address me as sweet alert as well");
    // await page.locator('//*[@aria-label="close"]').click();
    await page.getByLabel('close').click();
})