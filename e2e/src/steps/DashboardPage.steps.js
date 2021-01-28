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
// setDefaultTimeout(60 * 1000);

  Then('I see dashboard page',async function () {
    await dashboardPage.elementVisibleXpath(dashboardPage.dashboardLogo);
    // await dashboardPage.clickToElementXpath(dashboardPage.backToDashboard)
  });

  When('I click on my timesheet menu',async function () {
    await dashboardPage.clickToElementXpath(dashboardPage.myTimeSheet);
  });

  When('I click on setDiary menu',async function () {
    await dashboardPage.clickToElementXpath(dashboardPage.setDiary);
  });

  When('I click on jobManagement menu',async function () {
    await dashboardPage.clickToElementXpath(dashboardPage.jobManagement);
  });

  When('I click on myProfile menu',async function () {
    await dashboardPage.clickToElementXpath(dashboardPage.myProfile);
  });

  When('I click on backToDashboard menu',async function () {
    await dashboardPage.clickToElementXpath(dashboardPage.backToDashboard);
  });

  When('I click on PlantManagementMenu menu',async function () {
    await dashboardPage.clickToElementXpath(dashboardPage.PlantManagementMenu);
  });

  When('I click on dashboardMenu menu',async function () {
    await dashboardPage.clickToElementXpath(dashboardPage.dashboardMenu);
  });
