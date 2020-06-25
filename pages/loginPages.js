const { I, loginPage } = inject();

module.exports = {

  // insert your locators and methods here
  submitButton: {css: '#dokan-btn dokan-btn-theme input[type=submit]'},

  // introducing methods
  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  },
}
