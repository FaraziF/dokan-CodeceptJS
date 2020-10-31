const { setHeadlessWhen } = require('@codeceptjs/configure');
// const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');

// setHeadlessWhen(process.env.HEADLESS); // enables headless mode when HEADLESS environment variable exists
// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  // tests: 'tests/**/*_test.js',
  tests: 'tests/*/*_test.js',
  // tests: 'tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://dokan.ajaira.website/',
      browser: 'chrome',
      windowSize: '1200x1280',
      timeouts: {
         "script": 60000,
         "page load": 10000
       },
       desiredCapabilities: {
        chromeOptions: {
          args: [ "--headless", "--disable-gpu", "--no-sandbox" ]
        }
      },
    }
    //  Puppeteer: {
    //   url: "https://dokan.ajaira.website/",
    //   show: true,
    //   waitForNavigation: "networkidle0",
    //   windowSize: '1200x1880',
    // }
  },
  include: {
    I: './steps_file.js',
    pagesPage: './pages/pages.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'dokan',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    },
    autoLogin: {
      enabled: true,
      saveToFile: false,
      inject: 'loginAs',
      users: {
          admin: {
            login: (I) => {
              I.amOnPage('/my-account/');
              I.fillField('username', 'Dokan_Admin');
              I.fillField('password', 'ohjcw6j3mLdN9q7s$f');
              I.checkOption('Remember me');
	            I.click('login');
              I.dontSeeElement('.woocommerce-error');
            },
            check: (I) => {
              I.seeCurrentUrlEquals('/dashboard');
              // I.see('Hello admin'); seeInCurrentUrl
              I.amOnPage('/wp-admin');
            },
          },
          user: {
            login: (I) => {
              I.amOnPage('/my-account');
              I.fillField('Username or email address', 'jones');
              I.fillField('Password', 'aa');
              I.checkOption('Remember me');
	            I.click('login');
              I.dontSeeElement('.woocommerce-error');
            },
            check: (I) => {
              I.seeCurrentUrlEquals('/dashboard');
              // I.see('Hello daniel');
            },
          }
      },
    }
  }
}