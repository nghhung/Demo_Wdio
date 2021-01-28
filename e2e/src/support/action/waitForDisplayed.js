import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Wait for the given element to become visible
 * @param  {String}   selector      Element selector
 * @param  {String}   falseCase Whether or not to expect a visible or hidden
 *                              state
 *
 * @todo  merge with waitfor
 * 
 */
export default (selector, falseCase) => {
    /**
     * Maximum number of milliseconds to wait for
     * @type {Int}
     */
    const ms = 20000;
    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    console.log('falseCase+++++++++++++',!!falseCase);
    

    $(selector2).waitForDisplayed({timeout: ms, reverse: !!falseCase } );
};
