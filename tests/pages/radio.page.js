import { Page } from '@playwright/test';
class RadioPage {
    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;

    }

    get radioButtonLink() {
        return this.page.locator('//*[@href="/radio"]');

    }
    get radioPageTitle() {
        return this.page.locator("//*[text()='Radio & Checkbox']");
    }
    get radioButtonYes() {
        return this.page.locator('#yes');
    }
    get radioButtonNo() {
        return this.page.locator('#no');
    }
    get radioButtonOne() {
        return this.page.locator('#one');
    }
    get radioButtonTwo() {
        return this.page.locator('#two');
    }
    get checkboxYes() {
        return this.page.locator("#nobug");
    }

    get checkboxNo() {
        return this.page.locator('#bug');
    }
    get selectedRadioButton() {
        return this.page.locator('//*[@type="radio" and @checked]/parent::label');
    }
    get radioButtonFoo() {
        return this.page.locator("#foo");
    }
    get radioButtonBar() {
        return this.page.locator('#notfoo');
    }
    get disabledRadioButton() {
        return this.page.locator("//*[@name='plan']");
    }
    get checkedbox() {
        return this.page.locator('//input[@type="checkbox" and @checked]');
    }
    get termsRadioButton() {
        return this.page.locator("//*[normalize-space(text())='I agree to the']//input");
    }
}
export default RadioPage;