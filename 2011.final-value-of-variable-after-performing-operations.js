/**
 * https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/
 */

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let result = 0;
  operations.map((x) => (x.includes("+") ? (result += 1) : (result -= 1)));
  return result;
};
