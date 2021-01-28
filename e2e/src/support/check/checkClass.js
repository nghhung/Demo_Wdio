import checkIfElementExists from '../lib/checkIfElementExists';
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'
/**
 * Check if the given element has the given class
 * @param  {String}   selector              Element selector
 * @param  {String}   falseCase         Whether to check for the class to exist
 *                                      or not ('has', 'does not have')
 * @param  {String}   expectedClassName The class name to check
 */
export default (selector, falseCase, expectedClassName) => {

    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    /**
     * List of all the classes of the element
     * @type {Array}
     */
    const classesList = $(selector2).getAttribute('className').split(' ');

    if (falseCase === 'does not have') {
        expect(classesList).not.toContain(
            expectedClassName,
            `Element ${selector2} should not have the class ${expectedClassName}`
        );
    } else {
        expect(classesList).toContain(
            expectedClassName,
            `Element ${selector2} should have the class ${expectedClassName}`
        );
    }
};
