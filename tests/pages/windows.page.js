import { Page } from '@playwright/test';

class Windowspage {
    /**
     * 
     * @param { Page } page 
     */
    constructor(page) {
        this.page = page;
    }

    get newpageButton() {
        return this.page.locator('//a[@href="/windows/new"]');
    }

}
export default Windowspage;