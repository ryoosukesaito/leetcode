/**
 * https://leetcode.com/problems/separate-the-digits-in-an-array/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  const result = [];
  nums.forEach((num) => {
    num
      .toString()
      .split("")
      .forEach((digit) => {
        result.push(digit);
      });
  });
  return result;
};
