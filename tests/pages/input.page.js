import { Page } from '@playwright/test';

class InputPage {

    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    get editLink() {
        return this.page.locator("//a[@href='/edit']");
    }

    get title() {
        return this.page.locator("//h1");
    }

}
export default InputPage;