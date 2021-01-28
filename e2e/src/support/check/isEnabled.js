import checkIfElementExists from '../lib/checkIfElementExists';
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Check if the given selector is enabled
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the given selector
 *                              is enabled or not
 */
export default (selector, falseCase) => {
    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    /**
     * The enabled state of the given selector
     * @type {Boolean}
     */
    const isEnabled = $(selector2).isEnabled();

    if (falseCase) {
        expect(isEnabled).not.toEqual(
            true,
            `Expected element "${selector2}" not to be enabled`
        );
    } else {
        expect(isEnabled).toEqual(
            true,
            `Expected element "${selector2}" to be enabled`
        );
    }
};
