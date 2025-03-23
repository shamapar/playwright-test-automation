import { test, expect } from '@playwright/test';
import TablePage from '../pages/tableobject.page';
test('extracting table date in Object format', async ({ page }) => {
    const tablepage = new TablePage(page);
    await page.goto("https://the-internet.herokuapp.com/tables");

    await tablepage.getrows();


})