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

// test('table of absent/present', async ({ page }) => {
//     await page.goto("https://letcode.in/table");

//     const tablePage = new Tablepage(page);

//     const lastnames = await tablePage.lastNameOfSimpleTable();
//     expect(lastnames).toEqual(['Chatterjee', 'Raj', 'Man'])

// })

// test('test raj is present or not', async ({ page }) => {

//     await page.goto("https://letcode.in/table");
//     const tablePage = new Tablepage(page);
//     await tablePage.clickOnCheckBoxBasedOnUserName("Raj");

// const table = [
//     {
//         Dessert: 'Gingerbread',
//         Calories: '356',
//         Fat: '16',
//         Carbs: '49',
//         Protein: '4',
//         Cholesterol: '60',

//     },
//     {
//         Dessert: 'Frozen yogurt',
//         Calories: '159',
//         Fat: '6',
//         Carbs: '24',
//         Protein: '4',
//         Cholesterol: '70',
//     },
//     {
//         Dessert: 'Ice cream',
//         Calories: '237',
//         Fat: '9',
//         Carbs: '37',
//         Protein: '4',
//         Cholesterol: '40',
//     },
//     {
//         Dessert: 'Eclair',
//         Calories: '262',
//         Fat: '16',
//         Carbs: '24',
//         Protein: '6',
//         Cholesterol: '80',
//     },
//     {
//         Dessert: 'Cupcake',
//         Calories: '305',
//         Fat: '4',
//         Carbs: '67',
//         Protein: '4',
//         Cholesterol: '50',
//     }

// ];
// })
test.only('sorting columns of table', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/tables");
    const tablePage = new Tablepage(page);




    await tablePage.printingTableData();

})