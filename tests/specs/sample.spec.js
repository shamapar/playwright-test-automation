import { faker, fakerEN_AU } from "@faker-js/faker";
import test from "@playwright/test";

test('faker training', async () => {
    const firstName = faker.person.firstName('male');
    const lastname = faker.person.lastName('male');
    const emails = faker.internet.email({ firstName: firstName, lastName: lastname, provider: "gmail.com" })
    const phone = fakerEN_AU.phone.number()
    const streetAddress = fakerEN_AU.location.streetAddress()
    const cityAndCountry = fakerEN_AU.location.city().concat(" ").concat(fakerEN_AU.location.country());
    const state = fakerEN_AU.location.state()
    const zipCode = fakerEN_AU.location.zipCode()
    const dob = faker.date.birthdate().toISOString().split('T')[0];

    console.log("Name=", firstName, lastname);
    console.log("email=", emails);
    console.log("Phone=", phone)
    console.log("Addresss=", streetAddress)
    console.log(cityAndCountry)
    console.log(state, zipCode)
    console.log(dob);

})