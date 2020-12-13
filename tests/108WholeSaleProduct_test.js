Feature('108WholeSaleProduct');

Scenario('Admin settings', (I) => {
    I.loginAsAdmin();
    I.click('Dokan');
    I.wait(3);
    I.click('Settings');
    I.wait(5);
    I.click('Wholesale');
    I.scrollTo('.dokan-settings', 0,0);
    I.selectOption('#dokan_wholesale[wholesale_price_display][all_user]', 'Display wholesale price to all users');
    I.seeCheckboxIsChecked('#dokan_wholesale[display_price_in_shop_archieve]');
    I.click('//div[19]/form/p/input');
    I.waitForElementVisible('#setting-message_updated', 5);
});
