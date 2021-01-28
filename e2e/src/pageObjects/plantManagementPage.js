// import AbstractsPage from './commons/AbtractsPage.js'
var AbstractsPage = require('./commons/AbtractsPage.js')

class PlantManagementPage extends AbstractsPage {
    constructor(){
        super();
        this.plantManagementMaintenance = "//div[contains(text(),'Maintenance')]";
        this.plantManagementLogo = "//img[@alt='Acciona logo']"
        this.createNewPlant = "//span[contains(text(),'Create New Plant')]";
        this.addNewPlantLabel = "//h2[@class='MuiTypography-root MuiTypography-h6']";
        this.companyInput = "//input[@id='Company-select-outlined']";
        this.makeInput = "//input[@id='make']";
        this.modeInput = "//input[@id='model']";
        this.unitNoInput = "//input[@id='model']";
        this.plantTypeInput = "//input[@id='Plant Type-select-outlined']";
        this.makeYearInput = "//input[@id='makeYear']";
        this.engineerTypeInput = "//input[@id='Engine Type-select-outlined']";
        this.engineerNoInput = "//input[@id='engineNo']";
        this.vinNoInput = "//input[@id='vinNo']";
        this.buildDate = "//button[@class='MuiButtonBase-root MuiIconButton-root']//span[@class='MuiIconButton-label']//*[local-name()='svg']";
        this.currentDate = "//button[@class='MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-current MuiPickersDay-daySelected']";
        this.operatorInput = "//input[@id='mui-autocomplete-41585']";
        this.rateInput = "//input[@id='rate']";
        this.saveBtn = "//span[contains(text(),'Save')]";
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

module.exports = new PlantManagementPage();