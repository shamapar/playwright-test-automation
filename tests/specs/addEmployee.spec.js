import { test, expect } from '@playwright/test';
import AddEmployeePage from '../pages/addEmployee.page';
import LoginPage from '../pages/login.page';
import { employeeData } from '../testData/addEmployee';
import { loginData } from '../testData/login';
import SearchEmployeePage from '../pages/searchEmployee.page';

test.beforeEach('validate login', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const loginPage = new LoginPage(page);
    await expect(loginPage.loginTitle).toHaveText("Login");
    await loginPage.loginToApplication(loginData.username, loginData.password);
    await expect(loginPage.dashboardTtitle).toHaveText("Dashboard");

})

test('create new registration', async ({ page }) => {

    const addEmployeePage = new AddEmployeePage(page);
    await addEmployeePage.navigatingToAddEmployee();
    await expect(addEmployeePage.employeeTitlePage).toHaveText('Add Employee');

    await addEmployeePage.enterEmployeeDetails(employeeData.firstName, employeeData.lastName, employeeData.employeeId);
    await expect(addEmployeePage.verifyUserOption).toHaveText("Username");

    await addEmployeePage.enterUserCredentialsAndSubmit(employeeData.username, employeeData.userPassword, employeeData.status);
    await expect(addEmployeePage.successNotification).toHaveText('Successfully Saved');

    //searching the added employee by EmployeeID
    const searchEmployeePage = new SearchEmployeePage(page);
    await searchEmployeePage.navigatingToEmployeeList();
    await expect(searchEmployeePage.employeeListDashboardTitle).toHaveText('Employee Information');
    await searchEmployeePage.searchEmployeeById(employeeData.employeeId);

    const employeeSearchResults = await searchEmployeePage.getEmployeeRecordsDetails();
    expect(employeeSearchResults[0].id).toEqual(employeeData.employeeId);
})