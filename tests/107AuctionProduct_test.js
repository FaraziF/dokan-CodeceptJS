Feature('107AuctionProduct');

Scenario('Auction Settings', (I) => {
   I.loginAsAdmin();
   I.click('Dokan');
   I.wait(3);
   I.click('Settings');
   I.wait(2);
   I.click({link:'Selling Options'});

    if (I.tryToSeeCheckboxIsChecked('#dokan_selling[new_seller_enable_auction]')){
       I.checkOption('#dokan_selling[new_seller_enable_auction]');
    }
   I.wait(5);
   I.click('#dokan_selling #submit');
   I.amOnpage('/wp-admin/admin.php?page=wc-settings');
   I.click('Auctions');
    if (I.tryToSeeCheckboxIsChecked('#simple_auctions_dont_mix_shop')){
       I.checkOption('#simple_auctions_dont_mix_shop');
    }
    I.click('Save changes');
    I.wait(3);
    I.see('Your settings have been saved.');

});
Scenario('Create Auction Product', (I) => {
    I.loginAsVendor();
    I.click('Auction');
    I.click('Add New Auction Product');
    I.wait('5');
    I.fillField('#post-title','New Auction Product');
    I.selectOption('product_cat','Uncategorized');
    I.checkOption('#_auction_proxy');
    I.fillField('_auction_start_price','2');
    I.fillField('_auction_bid_increment','1');
    I.fillField('#_auction_reserved_price','3');
    I.fillField('#_regular_price','3');
    I.click('//input[@id="_auction_dates_from"]');
    I.wait(2);
    I.click('Now');
    I.click('//input[@id="_auction_dates_to"]');
     I.wait(2);
     I.click('Now');
     I.presskey('//dd[3]/div/select','50');
     I.wait(5);
    I.click('Add auction Product');
    I.wait(3);
    I.see('Success! The product has been updated successfully.');
});
Scenario('1st Customer bid', (I) => {
    I.loginAsCustomer();
    I.amOnPage('/shop/');
    I.selectOption('//select[@name="orderby"]','Sort by latest');
    I.wait(5);
    I.click('//main[@id="main"]/ul/li/a/img');
    I.wait(5);
    I.click('Bid');
    I.wait(5);
    session('2nd Customer bid', () => { 
        I.loginAsCustomerTwo();
        I.amOnPage('/shop/');
        I.selectOption('//select[@name="orderby"]','Sort by latest');
        I.wait(5);
        I.click('//main[@id="main"]/ul/li/a/img');
        I.wait(5);
        I.click('Bid');
        I.wait(2);
        I.click('Bid');
        I.click('Bid');
        I.click('Bid'); 
    });   
});