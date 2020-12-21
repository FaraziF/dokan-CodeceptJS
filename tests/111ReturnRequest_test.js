Feature('ReturnRequest');

Scenario('AdminSettings', (I) => {
	I.loginAsAdmin();
	I.amOnPage('/wp-admin/admin.php?page=dokan#/settings');
	I.wait(4);
	I.click('RMA');
	I.selectOption('dokan_rma[rma_order_status]','Completed');
	I.selectOption('dokan_rma[rma_enable_refund_request]','Yes');
	I.fillField('//input[@type="text"]','Bad Quality');
	I.forceClick({css:'.dokan-repetable-add-item-btn'});
	I.click('Save Changes');

});
Scenario('Vendor set RMA', (I) => {
	I.loginAsVendorTwo();
    I.amOnPage('/dashboard/products/');
    I.click('Add new product');
    I.fillField('post_title','WHite Dress');
    I.fillField('_regular_price','300');
    I.selectOption('#product_cat', 'Uncategorized');
    I.click('Create product');
    I.click('Save Product');
	I.amOnPage('/dashboard/settings/rma/');
	I.fillField('Label','Warranty');
    I.selectOption('#dokan-warranty-type','included_warranty');
    I.selectOption('#dokan-warranty-length','Lifetime');
    I.click('Save Changes');
    //I.see('Settings saved sucessfully');
    
});
Scenario('Customer View',(I)=>{
    I.loginAsCustomer();
	I.amOnPage('/store/vendor-two/');
	I.wait(4);
	I.click('//div[@id="dokan-content"]/div[3]/ul/li/a/img');
    I.placeOrder();
});

 Scenario('Vendor Completed Orders',(I)=>{
 	    I.loginAsVendorTwo();
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

 Scenario('Customer View',(I)=>{
 	   I.loginAsCustomer();
 	   I.amOnPage('/my-orders/');
 	   I.click('Request Warranty');
 	   I.wait(4);
 	   I.checkOption('//input[@name="request_item[]"]');
 	   I.selectOption('//select[@id="type"]','Refund');
 	   I.click('Submit Request');

 	   //pause();
 	 

});
 Scenario('Customer View',(I)=>{
     I.loginAsVendorTwo();
     I.amOnPage('/dashboard/return-request/');
     I.forceClick({css:'.fa-eye'});
     I.selectOption('#status','Completed');
     I.click('Update');
     I.fillField('#message','Ok we will replace this product');

});


