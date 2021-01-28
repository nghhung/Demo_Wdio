const {When, Then, And, Given, Before , After} = require("cucumber")
const expect = require("chai")
const puppeteer = require("puppeteer")

const loginPage = require('../../pageObjects/loginPage.js') 
const dashboardPage = require('../../pageObjects/dashboardPage.js') 
const myTimeSheetPage = require('../../pageObjects/myTimeSheetPage.js') 
const plantManagementPage = require('../../pageObjects/plantManagementPage.js') 
const setDiaryManagementPage = require('../../pageObjects/setDiaryManagementPage.js') 
// const loginPage = new LoginPage();
// // const dashboardPage = new DashboardPage();
// const plantManagementPage = new PlantManagementPage();
// const myTimeSheetPage = new MyTimeSheetPage();

var {setDefaultTimeout} = require('cucumber');
// setDefaultTimeout(60 * 1000);

  Then('I see the create new setDiary form',async function () {
    await myTimeSheetPage.elementVisibleXpath(setDiaryManagementPage.setDiaryForm);
  });

  When('I enter internal labour',async function () {
    await page.waitFor(2000)
    await setDiaryManagementPage.clickToElementXpath(setDiaryManagementPage.internalLabour);
    await page.waitFor(2000)
    await setDiaryManagementPage.pressDownArrow();
    await setDiaryManagementPage.pressEnter();
  });
  


  When('I enter job setdiary input',async function () {
    // await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.jobInput,"2C- Southbank Boulevard (80621) - Coleman Rail Pty Ltd");
  });

  When('I select internal labour select',async function () {
    // await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.costCodeInput,"LABOUR (2.10)");
  });

  When('I enter cost code setdiary input',async function () {
    await page.waitFor(2000)
    await setDiaryManagementPage.clickToElementXpath(setDiaryManagementPage.costCodeInput);
    await page.waitFor(2000)
    await setDiaryManagementPage.pressDownArrow();
    await setDiaryManagementPage.pressEnter();
  });
  
  When('I enter locationID setdiary input',async function () {
    await setDiaryManagementPage.clickToElementXpath(setDiaryManagementPage.locationIDInput);
    await page.waitFor(2000)
    await setDiaryManagementPage.pressDownArrow();
    await setDiaryManagementPage.pressEnter();
  });

  // When('I enter end time input',async function () {
  //   await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.endTimeInput,"05:00 PM");
  // });

  // When('I enter leave type input',async function () {
  //   await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.leaveTypeInput,"Public Holiday Worked");
  // });

  // When('I enter time allowance input',async function () {
  //   await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.timeAllowanceInput,"PIL/ANCH Allowance");
  // });

  // When('I enter LAHA input',async function () {
  //   await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.LAHAInput,"Geotech LAHA");
  // });

  // When('I enter start time input',async function () {
  //   await setDiaryManagementPage.typeToElementXpath(setDiaryManagementPage.startTimeInput,"02:30 PM");
  // });

  // When('I enter end time input',async function () {
  //   await setDiaryManagementPage.typeToElementXpath(setDiaryManagementPage.endTimeInput,"05:00 PM");
  // });

  When('I enter save setdiary button',async function () {
    await page.waitFor(2000)
    await setDiaryManagementPage.clickToElementXpath(setDiaryManagementPage.saveBtn);
  });

  When('I click on Summary select',async function () {
    await setDiaryManagementPage.clickToElementXpath(setDiaryManagementPage.summaryLabour);
  });

  When('I see internal crew',async function () {
    await page.waitFor(2000)
    await setDiaryManagementPage.elementInVisibleXpath(setDiaryManagementPage.loadingIcon)
    await setDiaryManagementPage.elementVisibleXpath(setDiaryManagementPage.removeButton);
  });

  When('I click delete setdiary button',async function () {
    await setDiaryManagementPage.clickToElementXpath(setDiaryManagementPage.removeButton);
  });

  When('I click confirm delete setdiary button',async function () {
    await setDiaryManagementPage.clickToElementXpath(myTimeSheetPage.deleteConfirmBtn);
  });

  When('I see new internal crew invisible',async function () {
    await setDiaryManagementPage.elementInVisibleXpath(setDiaryManagementPage.removeButton);
    await page.waitFor(2000);
  });

