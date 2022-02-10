const {chromium} = require('playwright');
const {expect} = require('chai');

async function executeTest() {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 100
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`file://${__dirname}/Example.html`);

  //Input your first name in the First Name text input

  //Input your last name in the Last Name text input

  //Select Option 3 from the select drop down

  //Check the checkbox labelled "Check Me"

  //Enter an integer in the Value 1 text input

  //Enter a second integer in the Value 2 text input

  //Click the Calculate button

  //Validate the result show on screen matches Value 1 + Value 2

  //Time permitting, enter a non integer in one of the values and verify the alert message shown, the dismiss the alert

}

executeTest().then(()=>{console.log('Test Complete'); process.exit(0)}).catch(error=>{console.log("Test Failed", error); process.exit(1)});
