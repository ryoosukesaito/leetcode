/**
 * https://leetcode.com/problems/a-number-after-a-double-reversal/description/
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  if (num === 0) return true;
  if (num % 10 === 0) {
    return false;
  }
  return true;
};
