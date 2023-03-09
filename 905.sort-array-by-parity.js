/**
 * https://leetcode.com/problems/sort-array-by-parity/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const resultArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) resultArr.push(nums[i]);
  }

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] % 2 !== 0) resultArr.push(nums[j]);
  }
  return resultArr;
};
