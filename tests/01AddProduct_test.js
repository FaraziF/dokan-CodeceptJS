Feature('Explore Frontend Functionality Works');

Before((I, loginAs) => { // or Background
	loginAs('vendor');
  });

Scenario('test something', (I) => {
    // Add New Product
    I.amOnPage('dashboard/products/');
    I.click('Add new product');
    I.click('.dokan-product-gallery');
    // pause();
    I.click('a.add-product-images');
    I.click('//*[@id="__attachments-view-119"]/li[1]');
    I.click('Add to gallery');
    I.click('form .add-product-images');
    I.click('//*[@id="__attachments-view-119"]/li[2]');
    I.click('Add to gallery');
    I.click('form .add-product-images');
    I.click('//*[@id="__attachments-view-119"]/li[3]');
    I.click('Add to gallery');
    I.fillField('post_title','Orange Collection');
    I.fillField('_regular_price','500');
    I.fillField('_sale_price','450');
    I.fillField('_sale_price_dates_from','2020-06-01');
    I.fillField('_sale_price_dates_to','2020-12-30');
    I.click('#select2-product_cat-container');
    I.click('span#select2-product_cat-container.select2-selection__rendered');
    I.click('span#select2-product_cat-container.select2-selection__rendered');
    I.fillField('post_excerpt','A cap is a form of headgear. Caps have crowns that fit very close to the head and have no brim or only a visor. They are typically designed for warmth and, when including a visor, blocking sunlight from the eyes. They come in many shapes and sizes');
    I.click('Create product');
    I.see('Edit Product');
    I.see('View Product');
});
