Feature('Dokan Stripe Payments');

/*
Scenario('Admin settings with dokan stripe setup', (I) => {
	I.amOnPage('/wp-admin');
	I.fillField('Username or Email Address', 'Dokan_Admin');
	I.fillField('Password', 'ohjcw6j3mLdN9q7s$f');
	I.checkOption('Remember Me');
	I.click('wp-submit');
		//admin settings
		I.click('WooCommerce');
        I.amOnPage('/wp-admin/admin.php?page=wc-settings');
        I.click('Payments');
        I.click({css: 'tr:nth-child(7) .wc-payment-gateway-method-title'});
        I.checkOption('#woocommerce_dokan-stripe-connect_enabled');
        I.checkOption('#woocommerce_dokan-stripe-connect_testmode');
        I.uncheckOption('Enable Stripe Checkout');
        I.fillField('#woocommerce_dokan-stripe-connect_test_secret_key','sk_test_DoMOe1KGxXxEqDi0DWqRqggp00zHAkctNi');
        I.fillField('#woocommerce_dokan-stripe-connect_test_publishable_key','pk_test_Hg1UlS12grPn9EMWCj3j9qng00VYJ7sx4w');
        I.fillField('#woocommerce_dokan-stripe-connect_test_client_id','ca_GNk3MaeyPFft911y4ruiyZeZirFMsSl5');
        I.click('Save changes');
	        I.click('Dokan');
	        I.wait(3);
	        I.click('Settings');
	        I.click('Withdraw Options');
	       	I.checkOption('Stripe');
         	I.click('Save Changes');
    I.moveCursorTo('#wp-admin-bar-top-secondary');
	I.click('Log Out');
});

Scenario('Vendor connect with dokan stripe', (I) => {
	// I.loginAsVendor();
	I.amOnPage('/my-account/');
	I.fillField('Username or email address', 'vendor-one');
	I.fillField('Password', '123456');
	I.click('Login');
 	I.amOnPage('/dashboard/settings/payment/');
 	I.click('//a[@class="clear"]//img');
 	// I.dontSee('Your account is not connected to Stripe. Connect your Stripe account to receive payouts.');
 	I.click('#skip-account-app');
 	I.wait(5);
 	I.waitUrlEquals('dashboard/settings/payment/');
 	I.see('Your account is connected with Stripe');
});
*/
Scenario('Customer payment with dokan stripe', (I) => {
 	// I.loginAsCustomer();
 	I.amOnPage('/my-account/');
	// I.fillField('Username or email address', 'customer');
	// I.fillField('Password', 'aa');
	// I.click('Login');
    /*I.amOnPage('/shop/');
    I.selectOption('//select[@name="orderby"]','Sort by latest');
    I.wait(5);
    I.click('//main[@id="main"]/ul/li/a/img');
    I.click('Add to cart');
	I.click('View cart');
	I.click('Proceed to checkout');*/
	// I.amOnPage('/checkout/');
	// I.scrollPageToBottom();
	// I.click('#payment_method_dokan-stripe-connect');
	// // I.forceClick('cardnumber');
	// pause();
	// I.fillField('//input[@name="cardnumber"]', '4242 4242 4242 4242');
	// I.fillField('//input[@name="exp-date"]', '02/27');
	// I.fillField('cvc', '1234');         
	// I.click('Place order');
	// I.fillField('#dokan-stripe-connect-card-number','customerone@gmail.com');
	// I.fillField('#dokan-stripe-connect-card-number','4242 4242 4242 4242');
	// I.fillField('#dokan-stripe-connect-card-expiry','02/27');
	// I.fillField('#dokan-stripe-connect-card-cvc','1234');
	// I.click('Place order');
	// I.wait(3);
 //   	I.waitForText('Thank you. Your order has been received.', 30, '.woocommerce-order');
	// I.see('Thank you. Your order has been received.');
});

