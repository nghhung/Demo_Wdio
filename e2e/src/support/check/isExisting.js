import checkIfElementExists from '../lib/checkIfElementExists';
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the element exists or not
 */
export default (selector, falseCase) => {
    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    /**
     * Elements found in the DOM
     * @type {Object}
     */
    const elements = $$(selector2);

    if (falseCase) {
        expect(elements).toHaveLength(
            0,
            `Expected element "${selector2}" not to exist`
        );
    } else {
        expect(elements.length).toBeGreaterThan(
            0,
            `Expected element "${selector2}" to exist`
        );
    }
};
