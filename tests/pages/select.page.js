import { Page } from '@playwright/test';
import { notification, appUrl, titleLocator } from '../pages/config';

class SelectPage {
    /**
     * 
     * @param {Page} Page 
     */
    constructor(Page) {
        this.page = Page;
    }
    get selectTitle() {
        return this.page.locator(titleLocator('Select'));
    }
    get dropdownButton() {
        return this.page.locator(titleLocator('Drop-Down'));
    }
    get dropdownPageTitle() {
        return this.page.locator("//h1");
    }
    get fruitDropdown() {
        return this.page.locator("//*[@id='fruits']");
    }
    get fruitNotification() {
        return this.page.locator(notification("You have selected Apple"));
    }
    get superheroDropdown() {
        return this.page.locator('#superheros');
    }
    get superheroNotification() {
        return this.page.locator(notification("You have selected Aquaman"));
    }
    get languageDropdown() {
        return this.page.locator("#lang");
    }
    get languageOptions() {
        return this.page.locator("//select[@id='lang']/option");
    }
    get countryDropdown() {
        return this.page.locator("//*[@id='country']");
    }
}
export default SelectPage;
