import { Page } from '@playwright/test';

class LoginPage {
    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;

    }
    get loginTitle() {
        return this.page.locator("//h5[contains(@class,'login-title')]");

    }
    get usernameBox() {
        return this.page.locator("//input[@name='username']");
    }
    get passwordbox() {
        return this.page.locator('//input[@name="password"]');
    }
    get loginButton() {
        return this.page.locator("//button[@type='submit']");
    }
    get dashboardTtitle() {
        return this.page.locator("//h6");
    }

    async loginToApplication(username, password) {

        await this.usernameBox.fill(username);
        await this.passwordbox.fill(password);
        await this.loginButton.click();
    }
}
export default LoginPage;