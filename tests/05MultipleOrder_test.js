Feature('Multiple Order From Single Vendor');

Scenario('Customer Order Multiple Product from signle vendor', (I) => {
    I.loginAsCustomer();
    I.viewMultipleProduct();
    I.placeOrder();
});

Scenario('Vendor Update Order Status', (I) => {
    I.loginAsVendor();
    // $vendor->updateOrderStatus();
    I.click('Orders');
        I.click('//form[@id="order-filter"]/table/tbody/tr/td[2]/a/strong');    
        I.wait(5);
        I.click('.dokan-edit-status');
        I.selectOption('#order_status','Completed');
        I.click('Update');
        I.wait('5');
        I.waitForElement('.dokan-panel-body.general-details', 30);
    I.see('Completed');
});

