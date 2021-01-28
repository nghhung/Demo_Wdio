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
var endTime;
  After(async function () {
    // await loginPage.closeBrowser();
  })
    
  Before(async function () {
    await loginPage.openBrowser();
})

  Given('I open Acciona linkedsite by desktop screen',async function () {
    await loginPage.openSite('http://localhost:3000/');
  });

  Then('I see the Acciona logo',async function () {
    await loginPage.elementVisibleXpath(loginPage.logo)
  });

  When('I click on Login to linksite button',async function () {
    await loginPage.clickToElementXpath(loginPage.loginBtn)
  });

  Then('I see Sign in Page',async function () {
    await loginPage.elementVisibleCss(loginPage.loginForm);
  });

  When('I enter {string} data to Email input',async function (string) {
    await loginPage.typeToElementXpath(loginPage.email,string)
  });

  When('I enter {string} data to Password input',async function (string) {
    await loginPage.typeToElementXpath(loginPage.password,string)
  });

  When('I click on Sign in button',async function () {
    await loginPage.clickToSignInBtn()
  });

  // Then('I see dashboard page',async function () {
  //   await dashboardPage.elementVisibleXpath(dashboardPage.dashboardLogo);
  // });

  Then('I see the error',async function () {
    await loginPage.elementVisibleXpath(loginPage.userNameError);
  });

  Then('I cant login',async function () {
    await loginPage.elementInVisibleXpath(loginPage.userNameError);
  });
