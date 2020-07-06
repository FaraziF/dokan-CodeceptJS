Feature('09DokanTaxes');

Scenario('test something', (I) => {
    I.loginAsAdmin();
    I.click('WooCommerce');
        I.amOnPage('/wp-admin/admin.php?page=wc-settings');
        I.checkOption('#woocommerce_calc_taxes');
   I.click("Save changes");
   I.see('Your settings have been saved.');

   I.click('Dokan');
   I.wait(3);
    I.click('Settings');
        I.click('Selling Options');
            I.selectOption('dokan_selling[tax_fee_recipient]','Vendor');
                I.click('#dokan_selling #submit');
                I.waitForElement('#setting-message_updated', 5);
                I.waitForElement('.metabox-holder',30);
        I.amOnPage('/wp-admin/admin.php?page=wc-settings&tab=general');
            I.checkOption('#woocommerce_calc_taxes');
            I.click('Save changes');
   I.wait(5);
   I.click('Tax');
   I.click('Standard rates');
   I.click('Insert row');
   I.fillField('//td[5]/input','14.00');
   I.click('Save changes');
   I.wait(5);
});

Scenario('Customer order', (I) => {
    I.loginAsCustomer();
        I.amOnPage('/shop/');
        I.selectOption('//select[@name="orderby"]','Sort by latest');
        I.wait(5);
        I.click('//main[@id="main"]/ul/li/a/img');
        // I.wait(5);
        // I.click('//button[@name="add-to-cart"]');
        // I.click('View cart');
        // I.click('Proceed to checkout');
        I.wait(5);
        I.placeOrder();
        //I.click('//div[@id="payment"]/div/button');
});
