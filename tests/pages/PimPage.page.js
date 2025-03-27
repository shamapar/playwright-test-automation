import { Page } from '@playwright/test'

class PIMPage {
    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    get pimPage() {
        return this.page.locator('//a[@href="/web/index.php/pim/viewPimModule"]');
    }

    get pimDashboardTitle() {
        return this.page.locator('//h6');
    }

    async navigatingToPIMpage() {
        await this.pimPage.click();
    }
}
export default PIMPage;