/**
 * https://leetcode.com/problems/maximum-ascending-subarray-sum/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  const result = [];
  let sum = 0;

  if (nums.length === 1) return nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum += nums[i - 1];
    if (nums[i - 1] > nums[i] || nums[i - 1] === nums[i]) {
      result.push(sum);
      sum = 0;
    }
    if (i === nums.length - 1) result.push((sum += nums[i]));
  }

  return Math.max(...result);
};
