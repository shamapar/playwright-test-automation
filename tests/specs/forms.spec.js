import { test } from '@playwright/test';
import Formpage from '../pages/forms.page';
import { userData } from '../testData/form';

test('filling form', async ({ page }) => {

    await page.goto("https://letcode.in/forms");
    const formpage = new Formpage(page);

    await formpage.enterPersonalDetails(userData.firstName, userData.lastName, userData.email);
    await formpage.enterPhoneNumber(userData.phone);
    await formpage.enterAddress(userData.streetAddress, userData.cityAndCountry, userData.state, userData.zipCode);
    await formpage.enterDateOfBirth(userData.dob);
    await formpage.selectGender('male');
    await formpage.acceptTermsAndCondition();

    await page.waitForTimeout(3000);

})