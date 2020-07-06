Feature('Refund Request');

Scenario('test something', (I) => {
    I.loginAsVendor();
    	I.click('Orders');
        // I.click(Locator::elementAt('//table/tbody/tr/td[2]', 1));
        I.click('//table/tbody/tr/td[2]');
        I.wait(5);
        I.click('Request Refund');
        I.fillField('.refund_order_item_qty','1');       
        I.click('#woocommerce-order-items');
        I.click('Submit Refund Request');
        I.acceptPopup();
        I.wait(5);
        I.acceptPopup();
});
Scenario('Approve Refund request', (I) => {
    I.loginAsAdmin();
        I.click('#toplevel_page_dokan');
        I.click('Refunds');
        I.wait(5);
        // I.checkOption(Locator::firstElement('//input[@name="item[]"]'));
        I.checkOption('//table/tbody/tr/td[1]');
        I.selectOption('#bulk-action-selector-top','Approve Refund');
        I.click('Apply');       
        I.wait(10);
});
