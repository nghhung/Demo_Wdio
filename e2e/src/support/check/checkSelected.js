import checkIfElementExists from '../lib/checkIfElementExists';
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Check the selected state of the given element
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Whether to check if the element is elected or
 *                              not
 */
export default (selector, falseCase) => {
    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    /**
     * The selected state
     * @type {Boolean}
     */
    const isSelected = $(selector2).isSelected();

    if (falseCase) {
        expect(isSelected)
            .not.toEqual(true, `"${selector2}" should not be selected`);
    } else {
        expect(isSelected)
            .toEqual(true, `"${selector2}" should be selected`);
    }
};
