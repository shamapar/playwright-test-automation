import { Page } from '@playwright/test';

class RegistrationPage {

    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;
    }
    get registrationPageTitle() {
        return this.page.locator("//h2");
    }
    get registerButton() {
        return this.page.locator("//a[contains(@href,'register')]");
    }
    get signUpPage() {
        return this.page.locator("//h1");
    }
}
export default RegistrationPage;