import { faker, fakerEN_AU } from '@faker-js/faker';
import { Page } from '@playwright/test';

class Formpage {
    /**
     * 
     * @param {Page} page 
     */

    constructor(page) {

        this.page = page;
    }

    get firstnameTextbox() {
        return this.page.locator('#firstname');
    }

    get lastnameTextbox() {
        return this.page.locator('#lasttname');
    }

    get emailTextbox() {
        return this.page.locator('#email');
    }
    get countryCodeSelectbox() {
        return this.page.locator("//*[@id='countrycode']/following-sibling::div//select");
    }
    get phoneNumTextbox() {
        return this.page.locator('#Phno');
    }
    get address1Textbox() {
        return this.page.locator('#Addl1');
    }
    get address2Textbox() {
        return this.page.locator('#Addl2');
    }
    get stateTextbox() {
        return this.page.locator('#state');
    }
    get postalcodeTextbox() {
        return this.page.locator('#postalcode');
    }
    get countrySelectbox() {
        return this.page.locator("//*[@id='country']/following-sibling::div//select");
    }
    get dobCalendar() {
        return this.page.locator('#Date');
    }
    get genderMaleRadioButton() {
        return this.page.locator('#male');
    }
    get genderFemaleRadioButton() {
        return this.page.locator('#female');
    }
    get genderTransRadioButton() {
        return this.page.locator('#trans');
    }

    get termsAndConsitionsCheck() {
        return this.page.locator('//input[@type="checkbox"]');
    }

    get submitButton() {
        return this.page.locator('//input[@type="submit"]');
    }

    async enterAddress(streetAddress, cityAndCountry, state, zipCode) {
        await this.address1Textbox.fill(streetAddress);
        await this.address2Textbox.fill(cityAndCountry);
        await this.stateTextbox.fill(state);
        await this.postalcodeTextbox.fill(zipCode);
        await this.countrySelectbox.selectOption({ label: "Australia" });
    }

    async enterPersonalDetails(firstName, lastName, email) {
        await this.firstnameTextbox.fill(firstName);
        await this.lastnameTextbox.fill(lastName);
        await this.emailTextbox.fill(email);
    }

    async enterPhoneNumber(phone) {
        await this.countryCodeSelectbox.selectOption({ value: "61" });
        await this.phoneNumTextbox.fill(phone);
    }


    async enterDateOfBirth(dob) {
        await this.dobCalendar.fill(dob);
    }

    async selectGender(gender) {
        if (gender === 'male') {
            await this.genderMaleRadioButton.check();
        }
        else if (gender === 'female') {
            await this.genderMaleRadioButton.check();
        }
        else if (gender === 'trans') {
            await this.genderTransRadioButton.check();
        }
    }

    async acceptTermsAndCondition() {
        await this.termsAndConsitionsCheck.check();
    }


}
export default Formpage;