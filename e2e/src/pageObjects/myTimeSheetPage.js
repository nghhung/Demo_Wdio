// import AbstractsPage from './commons/AbtractsPage.js'
var AbstractsPage = require('./commons/AbtractsPage.js')

class MyTimeSheetPage extends AbstractsPage {
    constructor(){
        super();
        this.timesheetForm = "//div[@id='container']";
        this.jobInput = "//input[@id='Job*-select-outlined']//following-sibling::div";
        this.costCodeInput = "//input[@id='Cost Code-select-outlined']//following-sibling::div";
        this.costCodeOption = "//input[@aria-activedescendant='Cost Code-select-outlined-option-1']";
        this.locationIDInput = "//div[@id='mui-component-select-LocationID']";
        this.startTimeInput = "(//input[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd'])[1]";
        this.endTimeInput = "(//input[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd'])[2]";
        this.leaveTypeInput = "//input[@id='Leave type-select-outlined']//following-sibling::div";
        this.timeAllowanceInput = "//input[@id='Time allowance-select-outlined']//following-sibling::div";
        this.LAHAInput = "//input[@id='LAHA-select-outlined']//following-sibling::div";
        this.saveBtn = "//span[contains(text(),'Save')]";
        this.deleteBtn = "//button[@title='Remove']//span[@class='MuiIconButton-label']";
        this.deleteConfirmBtn = "//span[contains(text(),'Delete')]";
        this.backToDashboard = "//button[@title='Go to Dashboard']";
        this.addAnotherEntryBtn = "//h5[contains(text(),'Add another entry')]";
        this.loadingTimesheets = "//h2[contains(text(),'Loading timesheets')]";
        this.costCodeError = "//p[@id='Cost Code-select-outlined-helper-text']";
        this.addNewTimeSheetSuccessMessage = "//div[contains(text(),'Timesheet Added Successfully')]";
        this.deleteNewTimeSheetSuccessMessage = "//div[contains(text(),'Timesheet Deleted Successfully')]";
        this.startTimeErrorMessage = "//p[contains(text(),'Start time  is a required field')]";
        this.endTimeErrorMessage = "//p[contains(text(),'Finish time  is a required field')]";
    };

    // DashboardPage() {
    //     this.page = page;
    // }
    // async openSite(url) {
    //     // this.initPage = await this.initBrowser();
    //     // let page = await (await this.initPage).page;
    //     await (await this.initPage).page.goto(url)
    // }

    

}

module.exports = new MyTimeSheetPage();