import { Page } from '@playwright/test';

class AddEmployeePage {
    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;

    }

    get pimPage() {
        return this.page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
    }

    get addEmployeeButton() {
        return this.page.locator("//a[text()='Add Employee']");
    }

    get employeeTitlePage() {
        return this.page.locator("//h6[text()='Add Employee']");
    }

    get firstName() {
        return this.page.locator('[name=firstName]');
    }

    get lastName() {
        return this.page.locator('[name=lastName]');
    }

    get createLoginDetailsCheck() {
        return this.page.locator('//input[@type="checkbox"]/following-sibling::span');
    }

    get verifyUserOption() {
        return this.page.locator("//label[text()='Username']");
    }

    getInputByLabel(lablel) {
        return this.page.locator(`//label[text()='${lablel}']/..//following-sibling::*/input`)
    }
    get successNotification() {
        return this.page.locator("//p[text()='Successfully Saved']");
    }
    userStatus(status) {
        if (status === "Enabled") {
            return this.page.locator("//input[@type='radio' and @value='1']");
        }
        else if (status === 'Disabled') {
            return this.page.locator("//input[@type='radio' and @value='2']")
        }
        else {
            throw new Error("Invalid status");
        }
    }

    get submitButton() {
        return this.page.getByRole('button', { name: " Save " })
    }

    async navigatingToAddEmployee() {
        await this.pimPage.click();
        await this.addEmployeeButton.click();

    }


    async enterEmployeeDetails(firstName, lastName, employeeId) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.getInputByLabel('Employee Id').fill(employeeId);
        await this.createLoginDetailsCheck.click();
    }

    async enterUserCredentialsAndSubmit(username, password, status) {
        await this.getInputByLabel('Username').fill(username);
        await this.getInputByLabel('Password').fill(password);
        await this.getInputByLabel('Confirm Password').fill(password);
        await this.userStatus(status).check();
        await this.submitButton.click()
    }
}


export default AddEmployeePage;