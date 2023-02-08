/**
 * https://leetcode.com/problems/add-strings/description/
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const amount = BigInt(num1, 10) + BigInt(num2, 10);

  return amount.toString();
};
