Feature('Vendor Subscription');
/* 
Scenario('Admin create Subscription Package', (I) => {
    I.loginAsAdmin();
        I.click('Dokan');
        I.click('Settings');
        I.click('Product Subscription');
            I.checkOption('dokan_product_subscription[enable_pricing]');
            I.checkOption('dokan_product_subscription[enable_subscription_pack_in_reg]');
            I.checkOption('dokan_product_subscription[notify_by_email]');
            I.fillField('//*[@id="dokan_product_subscription[no_of_days_before_mail]"]','5');
            I.selectOption('dokan_product_subscription[product_status_after_end]','Pending Review');
            I.click({ css : '#dokan_product_subscription #submit'});
            I.waitForElement('#setting-message_updated', 5);
        I.amOnPage('/wp-admin/post-new.php?post_type=product');
            I.fillField('post_title','Bronze Subscription Pack');
            I.pressKey('Tab');
            I.type('This is special pack for all vendor');
            I.selectOption('product-type','Dokan Subscription');
            I.fillField('_regular_price','400');
            // I.wait(3);
            I.appendField('//input[@id="_no_of_product"]','500');
            // I.wait(3);
            I.fillField('_pack_validity','250');
            I.selectOption('_subscription_product_admin_commission_type', 'Flat');
            I.fillField('admin_commission', '15');
            I.scrollTo('#wpbody-content', 0, 0);
            I.click('publish');
            // I.selectOption('dokan_product_author_override', 'Admin');
            // I.wait(3);
            // 
        
});
*/
Scenario('vendorBuySubscription', (I) => {
    I.loginAsVendorTwo();
        I.click('Products');
        // Check vendor have subscription or not 
        // if (I.tryToDontSeeLink('update your package'))
        // {
        //     I.see('Add new product');
        //     // I.closeBrowser();
        // }
        // // I.try
        // I.seeLink('update your package');
        I.click({ css : '.dokan-info > a'});
        I.wait(5);
        I.click({ css : '.product_pack_item:nth-child(1) .dokan-btn'});
        I.wait(3);
        //Fillup Form Field
        
        I.click('//*[@id="place_order"]');
        I.dontSee('.woocommerce-NoticeGroup.woocommerce-NoticeGroup-checkout');
        I.wait(5);

        ///Admin Approver Vendor Subscription Request
        session('Admin Approve', () => {
            I.loginAsAdmin();
            I.click('WooCommerce');
            I.wait(3);
            I.click('//td/a');
            I.wait(3);
            I.click('Completed');
        });

        // $AdminApprove = I.haveFriend('AdminApprove');
        // $AdminApprove->does(function(AcceptanceTester $I){
        //     I.loginAsAdmin();
        //     I.click('WooCommerce');
        //     I.wait(3);
        //     I.click('//td/a');
        //     I.wait(3);
        //     I.click('Completed');
        // });
        // $AdminApprove->leave();  

        I.click('Dashboard');
        I.click('Products');
            I.click('Add new product');
            I.fillField('post_title','Yellow Cap');
            I.fillField('_regular_price','200');
            I.fillField('_sale_price','180');
            I.click('Schedule');
            I.fillField('_sale_price_dates_from','2020-06-01');
            I.fillField('_sale_price_dates_to','2020-12-30');
            I.wait(2);
            I.selectOption('#product_cat', 'cloth');
            I.click('#dokan-create-new-product-btn');
            I.see('Edit Product');
            I.see('View Product');
        // $product->create('Red Shoe','1500','Uncategorized');
        // I.wait(5);
});
