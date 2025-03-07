
import { appUrl, titleLocator, notification } from './config';
import { test, expect } from '@playwright/test';

test.beforeEach('navigating to dropdown page', async ({ page }) => {
    await page.goto(appUrl.concat("/test"));

    const select = page.locator(titleLocator('Select'));
    await expect(select).toBeVisible();

    const btnDropDown = page.locator(titleLocator('Drop-Down'));
    await expect(btnDropDown).toBeVisible();

    await btnDropDown.click();
    await expect(page.locator("//h1")).toBeVisible();
})


test('select dropdown value by label', async ({ page }) => {
    const fruits = page.locator("//*[@id='fruits']");
    await fruits.selectOption({ label: "Apple" });
    await expect(page.locator(notification("You have selected Apple"))).toBeVisible();
})

test('select multiple dropdown', async ({ page }) => {
    const superhero = page.locator('#superheros');
    await expect(superhero).toBeVisible();
    await superhero.selectOption([{ label: 'Aquaman' }, { label: 'Batman' }, { label: 'Iron Man' }]);
    // await expect(superHero).toHaveCount(3);
    await expect(page.locator(notification("You have selected Aquaman"))).toBeVisible();
})


test('select language and print all options', async ({ page }) => {
    const lang = page.locator("#lang");
    await expect(lang).toBeVisible();
    await lang.selectOption('sharp');

    const options = page.locator("//select[@id='lang']/option");

    await expect(options).toHaveText(['JavaScript', 'Java', 'Python', 'Swift', 'C#']);
    expect(await options.allTextContents()).toHaveLength(5);
})


test('select value of dropdown', async ({ page }) => {
    const valueLocator = page.locator("//*[@id='country']");
    await valueLocator.click();
    await valueLocator.selectOption('India');

    await expect(valueLocator).toHaveValue('India');
    const selectedValue = await valueLocator.inputValue();
    expect(selectedValue).toBe('India');
})
