import checkIfElementExists from '../lib/checkIfElementExists';
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Check if the given element is (not) visible
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
export default (selector, falseCase) => {
    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isDisplayed = $(selector2).isDisplayed();

    if (falseCase) {
        expect(isDisplayed).not.toEqual(
            true,
            `Expected element "${selector2}" not to be displayed`
        );
    } else {
        expect(isDisplayed).toEqual(
            true,
            `Expected element "${selector2}" to be displayed`
        );
    }
};
