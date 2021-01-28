import checkIfElementExists from '../lib/checkIfElementExists';
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Check if the given element exists
 * @param  {String}   isExisting Whether the element should be existing or not
 *                               (an or no)
 * @param  {String}   selector       Element selector
 */
export default (isExisting, selector) => {
    /**
     * Falsecase assertion
     * @type {Boolean}
     */
    let falseCase = true;

    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));

    if (isExisting === 'an') {
        falseCase = false;
    }

    checkIfElementExists(selector2, falseCase);
};
