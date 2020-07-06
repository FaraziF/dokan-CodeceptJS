Feature('SingleProductMultipleVendor');

Scenario('Admin set SingleProductMultiplevendor', (I) => {
    I.loginAsAdmin();
       I.click('Dokan');
       I.wait(3);
       I.click('Settings');
       I.wait(5);
       I.click('Single Product MultiVendor');
    //    I.scrollTo('#wpbody-content', 0,0);
       I.checkOption('#dokan_spmv[enable_pricing]');
    //    if (I.tryToSeeCheckboxIsChecked('#dokan_spmv[enable_pricing]'))
    //         {
    //             I.checkOption('#dokan_spmv[enable_pricing]');
    //         }
       I.fillfield('dokan_spmv[sell_item_btn]','sell this one');
       I.fillfield('dokan_spmv[available_vendor_list_title]','Available');
       I.selectOption('dokan_spmv[available_vendor_list_position]','Above Single Product Tabs');
        I.selectOption('dokan_spmv[show_order]','min_price');
        I.click({ css : '#dokan_spmv #submit'});
        I.waitForElementVisible('#setting-message_updated', 5);

});
Scenario('single product from multiple vendor & customer view', (I) => {
    I.loginAsVendor();
    I.amOnPage('/dashboard/products/');
        I.addNewProduct();
        I.see('Online');

    session('Vendor Two', () => {
        I.loginAsVendorTwo();
        I.amOnPage('Shop');
        I.selectOption('//select[@name="orderby"]','Sort by latest');
        I.wait(5);
        I.click('//main[@id="main"]/ul/li/a/img');
        I.click('dokan_sell_this_item');
        I.wait(3);
        I.fillField('#_regular_price', '100');
        I.click('dokan_update_product');
    });

    session('Customer', () => {
        I.loginAsCustomer();
          I.click('Shop');
          I.selectOption('//select[@name="orderby"]','Sort by latest');
          I.wait(5);
          I.click('//main[@id="main"]/ul/li/a/img');
          I.scrollTo('#primary', 100,500);
          I.wait();
    });
});
