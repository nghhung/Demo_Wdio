// import AbstractsPage from './commons/AbtractsPage.js'
// var AbstractsPage = require('./commons/AbtractsPage.js')

class LoginPage {
    constructor(){
        // super();
        this.logo = "//img[@alt='Acciona logo']";
        this.loginBtn = "//span[contains(text(),'Login to LinkedSite')]";
        this.signInBtn = "(//input[@name='signInSubmitButton'])[2]";
        this.password = "(//input[@id='signInFormPassword'])[2]";
        this.email = "(//input[@id='signInFormUsername'])[2]";
        this.loginForm = '.modal-content-desktop';
        this.userNameError = "//div[@class='panel panel-left-border col-md-6 col-lg-6']//div//div//p[@id='loginErrorMessage']";
        this.addAnotherEntryBtn = "//h5[contains(text(),'Add another entry')]";
    };

//    LoginPage(page) {
//     this.page = page;
//    }
   
    // async openSite(url) {
    //     // this.initPage = await this.initBrowser();
    //     // let page = await (await this.initPage).page;
    //     // await this.initBrowser();
    //     await page.goto(url)
    // }

    // async clickToSignInBtn () {
    //     await this.clickToElementXpath(this.signInBtn);
    //     // return this.page;
    // }
}

module.exports = new LoginPage();