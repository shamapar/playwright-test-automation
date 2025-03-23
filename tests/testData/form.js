import { faker, fakerEN_AU } from '@faker-js/faker';

const firstname = faker.person.firstName('male');
const lastname = faker.person.lastName('male');

export const userData = {
    firstName: firstname,
    lastName: lastname,
    email: faker.internet.email({ firstName: firstname, lastName: lastname, provider: "gmail.com" }),
    phone: fakerEN_AU.phone.number(),
    streetAddress: fakerEN_AU.location.streetAddress(),
    cityAndCountry: fakerEN_AU.location.city().concat(" ").concat(fakerEN_AU.location.country()),
    state: fakerEN_AU.location.state(),
    zipCode: fakerEN_AU.location.zipCode(),
    dob: faker.date.birthdate().toISOString().split('T')[0]
}