import { test, expect } from '@playwright/test';
import RadioPage from '../pages/radio.page';

test.beforeEach('navigate to radio page', async ({ page }) => {

    await page.goto("https://letcode.in/test");

    const radioPage = new RadioPage(page);
    await radioPage.radioButtonLink.click();
    await expect(radioPage.radioPageTitle).toHaveText("Radio & Checkbox");

})

test('select any radio button', async ({ page }) => {

    const radioPage = new RadioPage(page);
    await radioPage.radioButtonYes.check();
    await expect(radioPage.radioButtonYes).toBeChecked();
    await expect(radioPage.radioButtonNo).toBeChecked({ checked: false });

})

test('check only one radio button selected', async ({ page }) => {

    const radioPage = new RadioPage(page);

    await radioPage.radioButtonYes.check();
    await expect(radioPage.radioButtonYes).toBeChecked();
    await expect(radioPage.radioButtonNo).not.toBeChecked();

    await radioPage.radioButtonNo.check();
    await expect(radioPage.radioButtonNo).toBeChecked();
    await expect(radioPage.radioButtonYes).toBeChecked({ checked: false })

})

test.fixme('check bug', async ({ page }) => {

    const radioPage = new RadioPage(page);

    await radioPage.checkboxYes.check();
    await expect(radioPage.checkboxYes).toBeChecked();
    await expect(radioPage.checkboxNo).not.toBeChecked();

    await radioPage.checkboxNo.check();
    await expect(radioPage.checkboxNo).toBeChecked();
    await expect(radioPage.checkboxYes).toBeChecked({ checked: false })

})

test('check which radio is selected', async ({ page }) => {

    const radioPage = new RadioPage(page);

    console.log(await radioPage.selectedRadioButton.innerText());
    console.log(await radioPage.radioButtonFoo.isChecked());
    console.log(await radioPage.radioButtonBar.isChecked());
})

test('confirm last radio is disabled', async ({ page }) => {

    const radioPage = new RadioPage(page);
    await expect(radioPage.disabledRadioButton.last()).toBeDisabled();
})

test('check the checkbox checked', async ({ page }) => {

    const radioPage = new RadioPage(page);
    await expect(radioPage.checkedbox).toBeChecked();
    console.log(await radioPage.checkedbox.isChecked());

})

test('check the terms', async ({ page }) => {

    const radioPage = new RadioPage(page);
    await radioPage.termsRadioButton.check();
    await expect(radioPage.termsRadioButton).toBeChecked();

})