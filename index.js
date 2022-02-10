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
  await page.type(
    '//label[contains(text(),"First Name")]/following-sibling::input',
    "Matt"
  )

  //Input your last name in the Last Name text input
  await page.type(
    '//label[contains(text(),"Last Name")]/following-sibling::input',
    "Bird"
  )

  //Select Option 3 from the select drop down
  await page.selectOption(
    '//select',
    "opt3"
  )

  //Check the checkbox labelled "Check Me"
  await page.check('id=checkMe');

  //Enter an integer in the Value 1 text input
  const value1 = 1;
  const value2 = 2;
  await page.type(
    '//label[contains(text(),"Value 1")]/following-sibling::input',
    `${value1}`
  )
  //Enter a second integer in the Value 2 text input
  await page.type(
    '//label[contains(text(),"Value 2")]/following-sibling::input',
    `${value2}`
  )
  //Click the Calculate button
  await page.click("//button");

  //Validate the result show on screen matches Value 1 + Value 2
  const resultElem = await page.waitForSelector('//div[contains(text(),"=")]/following-sibling::div/div');
  expect(await resultElem.textContent()).to.equal((value1+value2).toString());

  //Time permitting, enter a non integer in one of the values and verify the alert message shown, the dismiss the alert

}

executeTest().then(()=>{console.log('Test Complete'); process.exit(0)}).catch(error=>{console.log("Test Failed", error); process.exit(1)});