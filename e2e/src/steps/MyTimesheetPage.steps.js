const {When, Then, And, Given, Before , After} = require("cucumber")
const expect = require("chai")
const puppeteer = require("puppeteer")

const loginPage = require('../../pageObjects/loginPage.js') 
const dashboardPage = require('../../pageObjects/dashboardPage.js') 
const myTimeSheetPage = require('../../pageObjects/myTimeSheetPage.js') 
const plantManagementPage = require('../../pageObjects/plantManagementPage.js') 
// const loginPage = new LoginPage();
// // const dashboardPage = new DashboardPage();
// const plantManagementPage = new PlantManagementPage();
// const myTimeSheetPage = new MyTimeSheetPage();

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

  When('I see the create new timesheet form',async function () {
    await myTimeSheetPage.elementVisibleXpath(myTimeSheetPage.timesheetForm);
    await myTimeSheetPage.elementInVisibleXpath(myTimeSheetPage.loadingTimesheets)
    await page.waitFor(2000)
    await myTimeSheetPage.checkElementVisibleAndClickByXpath(myTimeSheetPage.addAnotherEntryBtn)
  });

  When('I enter job input',async function () { 
    await page.waitFor(2000)
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.jobInput,"Acciona Hong Kong Overheads");
    await page.waitFor(2000)
    await myTimeSheetPage.pressDownArrow();
    await myTimeSheetPage.pressEnter();
  });

  When('I enter empty job input',async function () { 
    await page.waitFor(2000)
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.jobInput,"");
  });

  When('I enter cost code input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.costCodeInput,"FINANCE");
    await myTimeSheetPage.pressDownArrow();
    await myTimeSheetPage.pressEnter();
  });

  When('I enter empty cost code input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.costCodeInput,"");
  });

  When('I enter location ID input',async function () {
    // await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.locationIDInput,"LABOUR (2.10)");
  });
  
  When('I enter start time input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.startTimeInput,"02:30 PM");
  });

  When('I enter empty start time input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.startTimeInput,"");
  });

  When('I enter end time input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.endTimeInput,"05:00 PM");
  });

  When('I enter empty end time input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.endTimeInput,"");
  });

  When('I enter leave type input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.leaveTypeInput,"Public Holiday Worked");
    await myTimeSheetPage.pressDownArrow();
    await myTimeSheetPage.pressEnter();
  });

  When('I enter empty leave type input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.leaveTypeInput,"");
  });

  When('I enter time allowance input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.timeAllowanceInput,"PIL/ANCH Allowance");
    await myTimeSheetPage.pressDownArrow();
    await myTimeSheetPage.pressEnter();
  });

  When('I enter empty time allowance input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.timeAllowanceInput,"");
  });

  When('I enter LAHA input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.LAHAInput,"Geotech LAHA");
    await myTimeSheetPage.pressDownArrow();
    await myTimeSheetPage.pressEnter();
  });

  When('I enter empty LAHA input',async function () {
    await myTimeSheetPage.typeToElementXpath(myTimeSheetPage.LAHAInput,"");
  });

  When('I click save button',async function () {
    await myTimeSheetPage.clickToElementXpath(myTimeSheetPage.saveBtn);
  });

  When('I see new timesheet',async function () {
    // await myTimeSheetPage.clickToElementXpath(myTimeSheetPage.saveBtn);
  });

  When('I click delete button',async function () {
    await myTimeSheetPage.clickToElementXpath(myTimeSheetPage.deleteBtn);
  });

  When('I click confirm delete button',async function () {
    await myTimeSheetPage.clickToElementXpath(myTimeSheetPage.deleteConfirmBtn);
    await myTimeSheetPage.elementInVisibleXpath(myTimeSheetPage.deleteConfirmBtn);
  });

  When('I see new timesheet invisible',async function () {
    // await myTimeSheetPage.clickToElementXpath(myTimeSheetPage.deleteConfirmBtn);
  });

  When('I see error timesheet',async function () {
    await myTimeSheetPage.elementVisibleXpath(myTimeSheetPage.costCodeError);
  });

