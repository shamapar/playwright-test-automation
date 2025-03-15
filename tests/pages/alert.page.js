import { Page } from '@playwright/test';

class AlertPage {

    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    alertMethod(label) {
        return this.page.locator(`//*[normalize-space(text())="${label}"]`);

    }
    get alertButton() {
        return this.page.locator("//a[@href='/alert']");
    }

    get pageTitle() {
        return this.page.locator("//h1");
    }
    get acceptButton() {
        return this.page.locator("#accept");
    }

    get dismissAlert() {
        return this.page.locator("#confirm");
    }

    get prompButton() {

        return this.page.getByRole('button', { name: "Prompt Alert" })
    }
    get promptText() {
        return this.page.locator('#myName');
    }

    get sweetAlertButton() {
        return this.page.getByRole("button", { name: "Modern Alert" });
    }

    get promptTitle() {
        return this.page.locator('//*[@class="modal-content"]//p');
    }

    get popupCloseIcon() {
        return this.page.getByLabel('close');
    }


}
export default AlertPage;