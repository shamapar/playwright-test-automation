import { Page } from '@playwright/test';

class TablePage {

    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;

    }

    async getrows() {

        let persons = [];

        const allrows = await this.page.locator('#table1>tbody>tr').all();

        for (let i = 0; i < allrows.length; i++) {

            const allcomlumns = await allrows[i].locator('td').all();

            const personobject = {
                lastname: "",
                firstname: "",
                email: "",
                due: "",
                website: ""
            }

            for (let j = 0; j < allcomlumns.length; j++) {

                const details = await allcomlumns[j].textContent();

                if (j === 0) personobject.lastname = details;
                if (j === 1) personobject.firstname = details;
                if (j === 2) personobject.email = details;
                if (j === 3) personobject.due = details;
                if (j === 4) personobject.website = details;
            }

            persons.push(personobject);
        }

        console.log(persons);
    }
}
export default TablePage;