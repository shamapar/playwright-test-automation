import { expect, Page } from '@playwright/test';


class SearchEmployeePage {
    /**
     * 
     * @param {Page} page 
     */

    constructor(page) {
        this.page = page;
    }

    get employeeListButton() {
        return this.page.locator("//a[text()='Employee List']")
    }

    async navigatingToEmployeeList() {
        await this.employeeListButton.click();
    }

    get employeeListDashboardTitle() {
        return this.page.locator("//h5");
    }

    get emoloyeesDetails() {
        return this.page.locator('//div[@class="oxd-table-card"]');
    }

    getInputbyLabel(label) {
        return this.page.locator(`//label[text()='${label}']/..//following-sibling::div//input`)
    }

    get searchButton() {

        return this.page.getByRole("button", { name: 'Search' });
    }

    async searchEmployeeById(id) {
        await this.getInputbyLabel('Employee Id').fill(id);
        await this.searchButton.click({ delay: 1000 });
    }

    async getEmployeeRecordsDetails() {
        const record = [];

        const tableLocator = '//*[@role="table"]//*[@class="oxd-table-body"]//*[@role="row"]';

        await this.page.locator(tableLocator).waitFor({ 'state': 'visible' })

        const allRows = await this.page.locator(tableLocator).all();

        for (let i = 1; i <= allRows.length; i++) {

            const columnLocator = `(${tableLocator})[${i}]//*[@role="cell"]`;
            const columns = await this.page.locator(columnLocator).all();
            const row = columns.length;
            const employee = {
                id: "",
                firstName: "",
                lastName: "",
                jobTitle: "",
                employmentStatus: "",
                subUnit: "",
                supervisor: "",
            }

            for (let j = 1; j <= row; j++) {

                const cellLocator = `(${columnLocator})[${j}]`;

                if (j === 1) continue;
                if (j === 9) continue;

                const employeeRecords = await this.page.locator(cellLocator).textContent();

                if (j === 2) employee.id = employeeRecords;
                else if (j === 3) employee.firstName = employeeRecords;
                else if (j === 4) employee.lastName = employeeRecords;
                else if (j === 5) employee.jobTitle = employeeRecords;
                else if (j === 6) employee.employmentStatus = employeeRecords;
                else if (j === 7) employee.subUnit = employeeRecords;
                else if (j === 8) employee.supervisor = employeeRecords;

            }
            record.push(employee);
        }

        return record;
    }
}
export default SearchEmployeePage;