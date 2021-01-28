import checkIfElementExists from '../lib/checkIfElementExists';
// const loginPage = require('../../../src/pageObjects/loginPage.js') 
// const dashboardPage = require('../../../src/pageObjects/dashboardPage.js') 
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   selector Element selector
 */
export default (action, type, selector) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
    const selector2 = (type === 'link') ? `=${selector}` : (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    
    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = (action === 'click') ? 'click' : 'doubleClick';

    checkIfElementExists(selector2);

    $(selector2)[method]();
};
