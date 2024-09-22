const { devices } = require('@playwright/test');
const config = {
testDir: './tests',
  timeout: 90* 1000,
  expect: {
     timeout: 8000 // it waits for 7 seconds tp load the web elements
  },
  reporter: 'html',
  use: {
    browserName:'chromium',
    headless: false,
    screenshot : 'on',
    trace: 'on', //on , off
    video: "off"
  },
};
module.exports = config;
