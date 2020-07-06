Feature('Vendor Vacation');

Scenario('vendorsetVacationSetttings', (I) => {
    I.loginAsVendor();
    I.click('Settings');
        I.checkOption('setting_go_vacation');
        I.selectOption('settings_closing_style', 'Date Wise Close');
        I.fillField('dokan_seller_vacation_datewise_from','2020-07-01');
        I.fillField('dokan_seller_vacation_datewise_to','2020-07-09');
        I.fillField('dokan_seller_vacation_datewise_message','Eid Vacation');
        I.click('#dokan-seller-vacation-save-edit');
        I.waitForElement('.dokan-seller-vacation-list-action', 5);
    I.click('Update Settings');
    I.see('Your information has been saved successfully');
});

// Scenario('customerviewVendorVacation', (I) => {
//     I.loginAsCustomer();
//     I.wait(3);
//     I.amonPage('/store-listing/');
//     I.click({ css : '.dokan-single-seller:nth-child(1) .dashicons'});
//     I.scrollTo('#primary', 100,600);
//     I.wait(5);
// });

