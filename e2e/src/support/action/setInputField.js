import checkIfElementExists from '../lib/checkIfElementExists';
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Set the value of the given input field to a new value or add a value to the
 * current selector value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the selector to
 * @param  {String}   selector Element selector
 */
export default (method, value, selector) => {
    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */
    const command = (method === 'add') ? 'addValue' : 'setValue';
    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));

    let checkValue = value;

    checkIfElementExists(selector2, false, 1);

    if (!value) {
        checkValue = '';
    }

    $(selector2)[command](checkValue);
};
