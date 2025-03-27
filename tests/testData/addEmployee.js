import { faker } from "@faker-js/faker";



export const employeeData = {
    firstName: faker.person.firstName('male'),
    lastName: faker.person.lastName('male'),
    employeeId: faker.number.int({ min: 800, max: 100000000 }).toString(),
    username: faker.internet.username(),
    userPassword: faker.internet.password({ length: 15, pattern: /[1-9 a-z A-Z]/ }),
    status: 'Enabled'
}