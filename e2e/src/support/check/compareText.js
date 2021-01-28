import checkIfElementExists from '../lib/checkIfElementExists';
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Compare the contents of two elements with each other
 * @param  {String}   selector1  Element selector for the first element
 * @param  {String}   falseCase Whether to check if the contents of both
 *                              elements match or not
 * @param  {String}   selector2  Element selector for the second element
 */
export default (selector1, falseCase, selector2) => {
    const selector3 = (((loginPage)[selector1])||((dashboardPage)[selector1]));
    const selector4 = (((loginPage)[selector2])||((dashboardPage)[selector2]));
    /**
     * The text of the first element
     * @type {String}
     */
    const text1 = $(selector3).getText();

    /**
     * The text of the second element
     * @type {String}
     */
    const text2 = $(selector4).getText();

    if (falseCase) {
        expect(text1).not.toEqual(
            text2,
            `Expected text not to be "${text1}"`
        );
    } else {
        expect(text1).toEqual(
            text2,
            `Expected text to be "${text1}" but found "${text2}"`
        );
    }
};
