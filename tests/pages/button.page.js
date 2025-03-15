import { Page } from '@playwright/test';
class ButtonPage {

    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    get buttonLink() {
        return this.page.locator("//a[@href='/button']");
    }
    get buttonPageTitle() {
        return this.page.locator("//h1");
    }
    get goToHomeButton() {
        return this.page.locator('#home');
    }
    get disabledButton() {
        return this.page.locator('//button[contains(@title,"Disabled") and @id="isDisabled"]');
    }
    get holdButton() {
        return this.page.locator('//button[@id="isDisabled" and contains(@class,"primary")]');
    }
}

export default ButtonPage;
