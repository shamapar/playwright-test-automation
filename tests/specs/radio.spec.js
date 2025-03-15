import { test, expect } from '@playwright/test';

test.beforeEach('navigate to radio page', async ({ page }) => {
    await page.goto("https://letcode.in/test");
    await page.locator('//*[@href="/radio"]').click();
    await expect(page.locator("//*[text()='Radio & Checkbox']")).toHaveText("Radio & Checkbox");

})

test('select any radio button', async ({ page }) => {
    await page.locator('#yes').check();
    await expect(page.locator('#yes')).toBeChecked();
    await expect(page.locator('#no')).toBeChecked({ checked: false });

})

test('check only one radio button selected', async ({ page }) => {

    const yesRadioBox = page.locator("#one");
    const noRadioBox = page.locator('#two');

    await yesRadioBox.check();
    await expect(yesRadioBox).toBeChecked();
    await expect(noRadioBox).not.toBeChecked();

    await noRadioBox.check();
    await expect(noRadioBox).toBeChecked();
    await expect(yesRadioBox).toBeChecked({ checked: false })

})

test.fixme('check bug', async ({ page }) => {

    const yesRadioBox = page.locator("#nobug");
    const noRadioBox = page.locator('#bug');

    await yesRadioBox.check();
    await expect(yesRadioBox).toBeChecked();
    await expect(noRadioBox).not.toBeChecked();

    await noRadioBox.check();
    await expect(noRadioBox).toBeChecked();
    await expect(yesRadioBox).toBeChecked({ checked: false })

})

test('check which radio is selected', async ({ page }) => {
    const buttonLocator = page.locator('//*[@type="radio" and @checked]/parent::label');
    console.log(await buttonLocator.innerText());

    const foo = page.locator("#foo");
    const bar = page.locator('#notfoo');

    console.log(await foo.isChecked());
    console.log(await bar.isChecked());
})

test('confirm last radio is disabled', async ({ page }) => {

    const radioLocator = page.locator("//*[@name='plan']");
    await expect(radioLocator.last()).toBeDisabled();
})

test('check the checkbox checked', async ({ page }) => {

    const checkboxLocator = page.locator('//input[@type="checkbox" and @checked]');
    await expect(checkboxLocator).toBeChecked();
    console.log(await checkboxLocator.isChecked());

})

test('check the terms', async ({ page }) => {

    const termsLocator = page.locator("//*[normalize-space(text())='I agree to the']//input");
    await termsLocator.check();
    await expect(termsLocator).toBeChecked();

})