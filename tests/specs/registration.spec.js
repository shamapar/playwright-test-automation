import { test, expect } from '@playwright/test';

test('validate signup', async({ page })=>{

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    const login= page.locator("//h2");
    await expect(login).toHaveText("Customer Login");

    const register= page.locator("//a[contains(@href,'register')]");
    await register.click();

    const signuppage=page.locator("//h1");
    await expect(signuppage).toHaveText("Signing up is easy!");
})