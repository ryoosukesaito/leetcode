/**
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let lengthCounter = 1;

    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i])
        lengthCounter = Math.max(lengthCounter, result[j] + 1);
    }

    result.push(lengthCounter);
  }

  return Math.max(...result);
};
