import checkIfElementExists from '../lib/checkIfElementExists';
import {loginPage , dashboardPage, myTimeSheetPage, plantManagementPage, setDiaryManagementPage} from '../../pageObjects/exportPage'

/**
 * Check the offset of the given element
 * @param  {String}   selector              Element selector
 * @param  {String}   falseCase         Whether to check if the offset matches
 *                                      or not
 * @param  {String}   expectedPosition  The position to check against
 * @param  {String}   axis              The axis to check on (x or y)
 */
export default (selector, falseCase, expectedPosition, axis) => {
    const selector2 = (((loginPage)[selector])||((dashboardPage)[selector])||((myTimeSheetPage)[selector])||((plantManagementPage)[selector])||((setDiaryManagementPage)[selector]));
    /**
     * Get the location of the element on the given axis
     * @type {[type]}
     */
    const location = $(selector2).getLocation(axis);

    /**
     * Parsed expected position
     * @type {Int}
     */
    const intExpectedPosition = parseFloat(expectedPosition);

    if (falseCase) {
        expect(location).not.toEqual(
            intExpectedPosition,
            `Element "${selector}" should not be positioned at `
            + `${intExpectedPosition}px on the ${axis} axis`
        );
    } else {
        expect(location).toEqual(
            intExpectedPosition,
            `Element "${selector}" should be positioned at `
            + `${intExpectedPosition}px on the ${axis} axis, but was found `
            + `at ${location}px`
        );
    }
};
