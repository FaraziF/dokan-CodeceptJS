// var Factory = require('rosie').Factory;
var faker = require('faker');
// const { name } = require('faker');

Feature('01VendorRegistration');

Scenario('test something', (I) => {
    I.amOnPage('/my-account/');
    I.fillField('Email address', faker.internet.email());
    I.fillField('#reg_password', faker.internet.password());
    I.checkOption('I am a vendor');
    I.fillField('First Name', faker.name.firstName());
    I.fillField('Last Name', faker.name.lastName());
    I.fillField('Shop Name', faker.name.lastName());
    I.fillField('Phone Number', faker.phone.phoneNumber());
    I.click('Register');
    I.see('Welcome to the Marketplace!');
    I.click('Not right now');
    I.seeInCurrentUrl('/dashboard');
});

