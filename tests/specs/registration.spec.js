import { test, expect } from '@playwright/test';
import RegistrationPage from '../pages/registration.page';

test('validate signup', async ({ page }) => {

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    const registrationPage = new RegistrationPage(page);
    await expect(registrationPage.registrationPageTitle).toHaveText("Customer Login");

    await registrationPage.registerButton.click();
    await expect(registrationPage.signUpPage).toHaveText("Signing up is easy!");
})