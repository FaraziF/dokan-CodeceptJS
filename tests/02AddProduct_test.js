Feature('Explore Frontend Functionality Works');

// Before((I, loginAs) => { // or Background
// 	loginAs('vendor');
//   });

Scenario('Vendor Add New Product', (I) => {
    // I.loginAsVendor();
    I.loginAsVendorTwo();
    I.amOnPage('/dashboard/products/');
    I.click('Add new product');
      // Add galeery photo
        // I.click('.dokan-product-gallery');
        // I.click('a.add-product-images');
        // I.click('//*[@id="__attachments-view-119"]/li[1]');
        // I.click('Add to gallery');
        // I.click('form .add-product-images');
        // I.click('//*[@id="__attachments-view-119"]/li[2]');
        // I.click('Add to gallery');
        // I.click('form .add-product-images');
        // I.click('//*[@id="__attachments-view-119"]/li[3]');
        // I.click('Add to gallery');
    I.fillField('post_title','Green Cap');
    I.fillField('_regular_price','300');
    I.fillField('_sale_price','250');
    I.click('Schedule');
    I.fillField('_sale_price_dates_from','2020-06-01');
    I.fillField('_sale_price_dates_to','2020-12-30');
    I.wait(2);
    I.selectOption('#product_cat', 'cloth');
    I.click('#dokan-create-new-product-btn');
    I.see('Edit Product');
    I.see('View Product');
});
