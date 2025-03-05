import { expect, test } from '@playwright/test';

test('validate input field', async ({ page }) => {

    await page.goto("https://letcode.in/test");
    const edit = page.locator("//a[@href='/edit']");
    await expect(edit).toHaveText("Edit");
    await edit.click();
    const inputTitle = page.locator("//h1");
    await expect(inputTitle).toBeVisible();

    const fullname = page.locator("#fullName");
    await fullname.fill('Shama');
    await expect(fullname).toHaveValue('Shama');

})

test('validate append input field', async ({ page }) => {

    await page.goto("https://letcode.in/test");
    const edit = page.locator("//a[@href='/edit']");
    await expect(edit).toHaveText("Edit");
    await edit.click();
    const inputTitle = page.locator("//h1");
    await expect(inputTitle).toBeVisible();

    const appendTextbox = page.locator("#join");
    const text = await appendTextbox.getAttribute('value');
    await appendTextbox.fill(text.concat(' Testing'));
    await expect(appendTextbox).toHaveValue('I am good Testing');

    await page.keyboard.press('Tab');
    //  await page.pause(5000);
})


test('whats in text', async ({ page }) => {

    await page.goto("https://letcode.in/test");
    const edit = page.locator("//a[@href='/edit']");
    await expect(edit).toHaveText("Edit");
    await edit.click();
    const inputTitle = page.locator("//h1");
    await expect(inputTitle).toBeVisible();

    const validateText = page.locator("#getMe");
    const text = await validateText.getAttribute('value');
    expect(text).toEqual("ortonikc");
    
})


test('clear the text', async ({ page }) => {

    await page.goto("https://letcode.in/test");
    const edit = page.locator("//a[@href='/edit']");
    await expect(edit).toHaveText("Edit");
    await edit.click();
    const inputTitle = page.locator("//h1");
    await expect(inputTitle).toBeVisible();

    const textToClear = page.locator("#clearMe");
    await textToClear.clear();
    await expect(textToClear).toHaveValue("");
   await page.waitForTimeout(3000);
})


test('disabled edit field', async ({ page }) => {

    await page.goto("https://letcode.in/test");
    const edit = page.locator("//a[@href='/edit']");
    await expect(edit).toHaveText("Edit");
    await edit.click();
    const inputTitle = page.locator("//h1");
    await expect(inputTitle).toBeVisible();

    const disabledText = page.locator("#noEdit");
    await expect(disabledText).toBeDisabled();
   await page.waitForTimeout(3000);
})

test('readonly edit field', async ({ page }) => {

    await page.goto("https://letcode.in/test");
    const edit = page.locator("//a[@href='/edit']");
    await expect(edit).toHaveText("Edit");
    await edit.click();
    const inputTitle = page.locator("//h1");
    await expect(inputTitle).toBeVisible();

    const readOnlyText = page.locator("#dontwrite");
   await expect(readOnlyText).not.toBeEditable();

   await page.waitForTimeout(3000);
})