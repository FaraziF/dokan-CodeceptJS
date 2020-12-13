Feature('109BookingProduct');

Scenario('Create Booking Product', (I) => {
    I.loginAsVendor();
    I.click('Booking');
    I.wait(3);
    I.click(' Add New Booking Product');
    I.wait(2);
    I.fillField('#post_title','Hotel Seagull Booking');
    I.wait(3);
    I.selectOption('_wc_booking_duration_type','Customer defined blocks of');
    I.fillField('_wc_booking_duration','2');
    I.selectOption('#_wc_booking_duration_unit','Hour(s)');
    I.fillField('#_wc_booking_min_duration','1');
    I.fillField('#_wc_booking_max_duration','2');
    I.selectOption('_wc_booking_calendar_display_mode','Calendar always visible');
    I.checkOption('#_wc_booking_enable_range_picker');
    I.fillField('#_wc_booking_qty','2');
    I.fillField('#_wc_booking_min_date','2');
    I.selectOption('#_wc_booking_min_date_unit','week');
    I.fillField('#_wc_booking_max_date','1');
    I.selectOption('#_wc_booking_max_date_unit','month');
    I.fillField('#_wc_booking_buffer_period','1');
    I.click('Add Range');
    // I.selectOption('.select wc_booking_availability_type','Date range');
    I.fillField('wc_booking_availability_from_date[]','2020-02-25');
    I.fillField('wc_booking_availability_to_date[]','2020-02-29');
    I.selectOption('wc_booking_availability_bookable[]','Yes');
    I.fillField('wc_booking_availability_priority[]','10');
    I.fillField('#_wc_booking_cost','200');
    I.fillField('#_wc_booking_block_cost','250');
    I.fillField('#_wc_display_cost','100');
    I.click('Save Product');
    I.see('Success! The product has been saved successfully.');

});
Scenario('Create Booking Product', (I) => {

    I.loginAsCustomer();
    I.amOnPage('/shop/');
    I.selectOption('//select[@name="orderby"]','Sort by latest');
    I.click('//main[@id="main"]/ul/li/a/img');
    I.moveMouseOver('//td/a');
    I.wait(10);
    I.click('//td/a');
    I.wait(10);
    I.click('//select/option[2]');
    I.wait(5);
     I.moveMouseOver('#wc-bookings-form-end-time');
     I.click('//div[2]/select/option[2]');
     //select/option[2]
    //I.selectOption('#wc-bookings-form-end-time','10:00 pm (4 Hours)');
    I.wait(6);
    I.click('Book now');
    I.wait(3);

    I.amOnPage('/cart/');
    I.click('Proceed to checkout');
    I.wait(5);
    I.click('//div[@id="payment"]/div/button');
    I.waitForText('Thank you. Your order has been received.', 30, '.woocommerce-order');
    I.see('Thank you. Your order has been received.');

});