import { Page } from '@playwright/test';

class Waitpage {
    /**
     * 
     * @param { Page } page 
     */
    constructor(page) {
        this.page = page;
    }

    get examplebutton1() {
        return this.page.locator('//*[@href="/dynamic_loading/1"]');
    }
    get dynamicallyloadedPage() {
        return this.page.locator("//h4[text()='Example 1: Element on page that is hidden']");
    }
    get buttonlink() {
        return this.page.locator("//button");
    }
    get resultafterwait() {
        return this.page.locator('//h4[text()="Hello World!"]');
    }
    get loading() {
        return this.page.locator("#loading");
    }
    get examplebutton2() {
        return this.page.locator('//*[@href="/dynamic_loading/2"]');
    }
    get dynamicallyloadedPage1() {
        return this.page.locator("//h4[text()='Example 2: Element rendered after the fact']");
    }

}
export default Waitpage;