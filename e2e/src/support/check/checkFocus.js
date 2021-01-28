import checkIfElementExists from '../lib/checkIfElementExists';
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Check if the given element has the focus
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the given element has focus
 *                              or not
 */
export default (selector, falseCase) => {
    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    /**
     * Value of the hasFocus function for the given element
     * @type {Boolean}
     */
    const hasFocus = $(selector2).isFocused();

    if (falseCase) {
        expect(hasFocus).not.toBe(
            true,
            'Expected element to not be focused, but it is'
        );
    } else {
        expect(hasFocus).toBe(
            true,
            'Expected element to be focused, but it is not'
        );
    }
};
