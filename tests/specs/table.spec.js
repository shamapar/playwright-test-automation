import { test, expect } from '@playwright/test';
import Tablepage from '../pages/table.page';
import { table } from 'console';

test('navigating homepage', async ({ page }) => {
    await page.goto("https://letcode.in/table");
    const tablePage = new Tablepage(page);
    await expect(tablePage.pageTitle).toHaveText('Table');

    const computedAmount = await tablePage.getShoppingTableTotalAmount();

    const totalAmount = await page.locator("//table[@id='shopping']//tfoot//b").innerText();

    expect(Number(totalAmount)).toEqual(computedAmount);
})

test('table of absent/present', async ({ page }) => {
    await page.goto("https://letcode.in/table");

    const tablePage = new Tablepage(page);

    const lastnames = await tablePage.lastNameOfSimpleTable();
    expect(lastnames).toEqual(['Chatterjee', 'Raj', 'Man'])

})

test('test raj is present or not', async ({ page }) => {

    await page.goto("https://letcode.in/table");
    const tablePage = new Tablepage(page);
    await tablePage.clickOnCheckBoxBasedOnUserName("Raj");

})