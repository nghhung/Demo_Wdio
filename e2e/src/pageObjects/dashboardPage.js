// import AbstractsPage from './commons/AbtractsPage.js'
// var AbstractsPage = require('./commons/AbtractsPage.js')

class DashboardPage {
    constructor(){
        // super();
        this.dashboardLogo = "(//a[@rel='noopener noreferrer'])[1]";
        this.dashboardMenu = "(//div[contains(text(),'Dashboard')])[1]";
        this.PlantManagementMenu = "(//div[contains(text(),'Plant Management')])[1]";
        this.setDiary = "//div[contains(text(),'Site Diary')]";
        this.jobManagement = "(//div[contains(text(),'Job Management')])[1]";
        this.myProfile = "(//div[contains(text(),'My Profile')])[1]";
        this.myTimeSheet = "(//div[contains(text(),'My Timesheet')])[1]";
        this.backToDashboard = "//button[@title='Go to Dashboard']";
        //input[@id='Job*-select-outlined']
    };

    // DashboardPage() {
    //     this.page = page;
    // }
    // async openSite(url) {
    //     // this.initPage = await this.initBrowser();
    //     // let page = await (await this.initPage).page;
    //     await (await this.initPage).page.goto(url)
    // }
    // async clickToMyTimeSheetPage () {
    //     await this.clickToElementXpath(this.myTimeSheet);
    //     // return this.page;
    // }
}

module.exports = new DashboardPage();