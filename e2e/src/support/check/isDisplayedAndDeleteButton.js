import checkIfElementExists from '../lib/checkIfElementExists';
import waitForElement from '../action/waitFor';
import clickBtn from '../action/clickElement'
import sleep from '../action/pause'
import refresh from '../action/refreshBrowser'
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Check if the given element is (not) visible
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
export default (selector,falseCase) => {
    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    /**
     * Visible state of the give element
     * @type {String}
     */
    // const isDisplayed = $(selector2).isDisplayed();

    // if (falseCase) {
    //     expect(isDisplayed).not.toEqual(
    //         true,
    //         `Expected element "${selector2}" not to be displayed`
    //     );
    // } else {
    //     expect(isDisplayed).toEqual(
    //         true,
    //         `Expected element "${selector2}" to be displayed`
    //     );
    // }

    const deleteFunction = () => {
        const isDisplayed = $(selector2).isDisplayed();
        if (isDisplayed === true) {
            sleep(2000);
            waitForElement('deleteBtn')
            sleep(2000);
            clickBtn('click','element','deleteBtn')
            sleep(2000);
            waitForElement('deleteConfirmBtn')
            sleep(2000);
            clickBtn('click','element','deleteConfirmBtn')
            sleep(2000);
            refresh();
            sleep(2000);
            return deleteFunction();
        } else {
            return;
        }
    }

    deleteFunction();
};
