import { test, expect } from '@playwright/test';
import LoginPage from '..//pages/login.page';

test('validate login', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const loginPage = new LoginPage(page);
    await expect(loginPage.loginTitle).toHaveText("Login");

    await loginPage.usernameBox.fill("Admin");
    await loginPage.passwordbox.fill("admin123");
    await loginPage.loginButton.click();

    await expect(loginPage.dashboardTtitle).toHaveText("Dashboard");

}) 
