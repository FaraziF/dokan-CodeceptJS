Feature('Multiple Vendor Order');

Scenario('test something', (I) => {
    I.loginAsCustomer();
    I.viewMultipleVendorMultipleProduct();
    I.placeOrder();
    
});

Scenario('test something', (I) => {
    I.loginAsVendor();
    I.updateOrderStatus(); //need to update
    
});
