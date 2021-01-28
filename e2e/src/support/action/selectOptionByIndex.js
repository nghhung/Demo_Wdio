import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Select a option from a select element by it's index
 * @param  {String}   index      The index of the option
 * @param  {String}   obsolete   The ordinal indicator of the index (unused)
 * @param  {String}   selector Element selector
 *
 * @todo  merge with selectOption
 */
export default (index, obsolete, selector) => {

    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    /**
     * The index of the option to select
     * @type {Int}
     */
    const optionIndex = parseInt(index, 10);

    $(selector2).selectByIndex(optionIndex);
};
