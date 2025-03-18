import { test, expect } from '@playwright/test';
import ElementsPage from '../pages/elements.page.js';

test.beforeEach('validate login', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const elementsPage = new ElementsPage(page);
    await elementsPage.usernameBox.fill("Admin");
    await elementsPage.passwordbox.fill("admin123");
    await elementsPage.loginButton.click();
    await expect(elementsPage.dashboardTtitle).toHaveText("Dashboard");

})

test('verify profile picture', async ({ page }) => {

    const elementsPage = new ElementsPage(page);
    const visible = await page.getByAltText('profile picture').isVisible();
    console.log("Profile picture visible=", visible);
})

test.only('list of Menus', async ({ page }) => {

    const elementsPage = new ElementsPage(page);
    const allMenus = await elementsPage.menuOptions.all();

    for (let option of allMenus) {
        console.log(await option.textContent());
    }

    const menuItems = await Promise.all(allMenus.map(async (menu) => await menu.textContent()));

    console.log(menuItems);

    const menu = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz']

    await expect(elementsPage.menuOptions).toHaveText(menu);

})

test('Total Number of Menus', async ({ page }) => {

    const elementsPage = new ElementsPage(page);
    const allMenus = await elementsPage.menuOptions.all();
    console.log("Total number of menus=", allMenus.length);
    expect(allMenus).toHaveLength(12);

})



