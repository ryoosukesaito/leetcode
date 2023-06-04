/**
 * https://leetcode.com/problems/missing-number/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sortedNumsArr = nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i <= sortedNumsArr.length; i++) {
    if (sortedNumsArr[i] !== i) {
      if (sortedNumsArr[i] > i || sortedNumsArr[i] === undefined) {
        result = i;
        return result;
      }
    }
  }
};
