Feature('Vendor Send Withdraw Request');

Scenario('test something', (I) => {
    I.loginAsVendorTwo();
        //I.wait(10);
        I.click('Withdraw');
        I.fillField('#withdraw-amount','200');
        I.selectOption('#withdraw-method','Bank Transfer');
        I.click('Submit Request');
        I.wait('5');
        I.see('Your request has been received successfully and being reviewed!');
});

Scenario('test something', (I) => {
    I.loginAsAdmin();
    I.click('Dokan');
    I.click('#toplevel_page_dokan');
    I.click('Withdraw');
    I.wait(5);
    // I.checkOption(Locator::firstElement('//input[@name="item[]"]'));
    I.checkOption('//input[@name="item[]"]');
    I.selectOption('#bulk-action-selector-top','Approve');
    I.click('Apply');
});