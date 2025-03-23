import { Page } from '@playwright/test';

class Tablepage {
    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;
    }
    get pageTitle() {
        return this.page.locator('//h1');

    }

    async getShoppingTableTotalAmount() {
        const allRows = await this.page.locator("table[id=shopping] > tbody > tr").all();

        let totalAmount = 0;

        for (let i = 0; i < allRows.length; i++) {
            const amount = await allRows[i].locator('td').last().textContent();
            totalAmount = totalAmount + Number(amount)
        }

        return totalAmount;
    }

    async lastNameOfSimpleTable() {
        const names = [];
        const allRows = await this.page.locator('table[id="simpletable"]>tbody>tr').all();

        for (let i = 0; i < allRows.length; i++) {
            const lastname = await allRows[i].locator('td').nth(1).textContent();
            names.push(lastname);
        }
        return names;
    }
    async clickOnCheckBoxBasedOnUserName(user) {
        const allRows = await this.page.locator('table[id="simpletable"]>tbody>tr').all();
        for (let names = 0; names <= allRows.length; names++) {
            const lastname = await allRows[names].locator('td').nth(1).textContent();

            if (lastname === user) {

                await allRows[names].locator('td').last().locator('input').check();
                break;
            }
        }


    }
    async printingTableData() {
        const dessertrow = await this.page.locator('#table1>tbody>tr').all();

        const userData = [];

        for (let i = 0; i < dessertrow.length; i++) {

            const columns = await dessertrow[i].locator('td').all();

            const personObject = {
                lastName: "",
                firstName: "",
                email: "",
                due: 0
            }

            for (let j = 0; j < columns.length; j++) {
                const value = await columns[j].textContent();

                if (j === 0) personObject.lastName = value;
                else if (j === 1) personObject.firstName = value;
                else if (j === 2) personObject.email = value;
                else if (j === 3) personObject.due = value;
            }

            userData.push(personObject);
        }

        console.log(userData);
    }






}
export default Tablepage;


