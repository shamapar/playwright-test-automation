import { test, expect } from '@playwright/test';


test('multidropdown testing', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

    // const opt = page.locator('#colors option');
    // await expect(opt).toHaveCount(7);
    // await expect(opt).toContainText(['Red', 'Blue']);

    const locator = await page.$$('#colors option');//stored in array
    console.log("All options", locator.length);
    expect(locator.length).toEqual(7);

    const options = await page.locator('#colors').textContent();
    console.log(options);
    await expect(options).toContain("Green");
    await expect(options.includes('Blue')).toBeTruthy();

    let test = false;
    for (let option of locator) {

        const val = await option.textContent();
        if (val.includes("Blue")) {
            test = true;
            break;
        }
    }
    await expect(test).toBeTruthy();

})

