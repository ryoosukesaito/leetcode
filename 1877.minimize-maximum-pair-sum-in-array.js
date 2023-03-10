/**
 * https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  const maxNumArr = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length / 2; i++) {
    maxNumArr.push(nums[i] + nums[nums.length - (i + 1)]);
  }

  return Math.max(...maxNumArr);
};
