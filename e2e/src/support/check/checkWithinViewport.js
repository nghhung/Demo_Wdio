import checkIfElementExists from '../lib/checkIfElementExists';
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Check if the given element is visible inside the current viewport
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the element is visible
 *                              within the current viewport or not
 */
export default (selector, falseCase) => {
    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    /**
     * The state of visibility of the given element inside the viewport
     * @type {Boolean}
     */
    const isDisplayed = $(selector2).isDisplayedInViewport();

    if (falseCase) {
        expect(isDisplayed).not.toEqual(
            true,
            `Expected element "${selector2}" to be outside the viewport`
        );
    } else {
        expect(isDisplayed).toEqual(
            true,
            `Expected element "${selector2}" to be inside the viewport`
        );
    }
};
