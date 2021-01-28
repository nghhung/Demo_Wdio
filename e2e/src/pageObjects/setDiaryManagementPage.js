// import AbstractsPage from './commons/AbtractsPage.js'
var AbstractsPage = require('./commons/AbtractsPage.js')

class SetDiaryManagementPage extends AbstractsPage {
    constructor(){
        super();
        this.setDiaryForm = "//div[@id='container']";
        this.jobInput = "//input[@id='Job*-select-outlined']";
        this.costCodeInput = "//input[@id='Cost Code-select-outlined']";
        this.locationIDInput = "//div[@id='mui-component-select-LocationID']";
        this.startTimeInput = "(//input[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd'])[1]";
        this.endTimeInput = "(//input[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd'])[2]";
        this.leaveTypeInput = "//input[@id='Leave type-select-outlined']";
        this.timeAllowanceInput = "//input[@id='Time allowance-select-outlined']";
        this.LAHAInput = "//input[@id='LAHA-select-outlined']";
        this.saveBtn = "//span[contains(text(),'Save')]";
        this.deleteBtn = "//button[@title='Remove']//*[name()='svg']";
        this.deleteConfirmBtn = "//span[contains(text(),'Delete')]";
        this.backToDashboard = "//button[@title='Go to Dashboard']";
        this.internalLabour = "//input[@id='Internal labour-select-outlined']";
        this.summaryLabour = "//span[contains(text(),'Summary')]";
        this.removeButton = "//button[@title='Remove']//*[name()='svg']";
        this.loadingIcon = "(//div[@class='MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate'])[1]"
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

module.exports = new SetDiaryManagementPage();