import { test, expect } from '@playwright/test';


test('validate login', async ({ page }) => {
    //'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

    // "//h5[contains(@class,'login-title')]"
    // "//input[@name='username']"
    // '//input[@name="password"]'
    // "//button[@type='submit']"
    // "//h6"
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const loginTitle = page.locator("//h5[contains(@class,'login-title')]");
    await expect(loginTitle).toHaveText("Login");

    const username = page.locator("//input[@name='username']");
    const password = page.locator('//input[@name="password"]');
    const login = page.locator("//button[@type='submit']");

    await username.fill("Admin");
    await password.fill("admin123");
    await login.click();

    const dasboard = page.locator("//h6");
    await expect(dasboard).toHaveText("Dashboard");

}) 
