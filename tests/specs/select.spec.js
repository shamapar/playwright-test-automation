
import { appUrl, titleLocator, notification } from '../pages/config';
import { test, expect } from '@playwright/test';
import SelectPage from '../pages/select.page';

test.beforeEach('navigating to dropdown page', async ({ page }) => {

    await page.goto(appUrl.concat("/test"));
    const selectPage = new SelectPage(page);
    await expect(selectPage.selectTitle).toBeVisible();
    await expect(selectPage.dropdownButton).toBeVisible();
    await selectPage.dropdownButton.click();
    await expect(selectPage.dropdownPageTitle).toBeVisible();
})


test('select dropdown value by label', async ({ page }) => {
    const selectPage = new SelectPage(page);

    await selectPage.fruitDropdown.selectOption({ label: "Apple" });
    await expect(selectPage.fruitNotification).toBeVisible();
})

test('select multiple dropdown', async ({ page }) => {
    const selectPage = new SelectPage(page);

    await expect(selectPage.superheroDropdown).toBeVisible();
    await selectPage.superheroDropdown.selectOption([{ label: 'Aquaman' }, { label: 'Batman' }, { label: 'Iron Man' }]);
    // await expect(superHero).toHaveCount(3);
    await expect(selectPage.superheroNotification).toBeVisible();
})


test('select language and print all options', async ({ page }) => {
    const selectPage = new SelectPage(page);
    await expect(selectPage.languageDropdown).toBeVisible();
    await selectPage.languageDropdown.selectOption('sharp');

    await expect(selectPage.languageOptions).toHaveText(['JavaScript', 'Java', 'Python', 'Swift', 'C#']);
    expect(await selectPage.languageOptions.allTextContents()).toHaveLength(5);
})


test('select value of dropdown', async ({ page }) => {
    const selectPage = new SelectPage(page);

    await selectPage.countryDropdown.click();
    await selectPage.countryDropdown.selectOption('India');

    await expect(selectPage.countryDropdown).toHaveValue('India');
    const selectedValue = await selectPage.countryDropdown.inputValue();
    expect(selectedValue).toBe('India');
})
