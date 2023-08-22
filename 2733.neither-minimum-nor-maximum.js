/**
 * https://leetcode.com/problems/neither-minimum-nor-maximum/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  nums.sort((a, b) => a - b).pop();
  nums.splice(0, 1);
  if (nums.length === 0) return -1;
  return nums[0];

  //regarding to solution
  // return nums.length <3 ? -1 : nums.sort((a,b) => a-b)[1]
};
