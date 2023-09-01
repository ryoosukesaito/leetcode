/**
 * https://leetcode.com/problems/maximum-average-subarray-i/description/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (nums.length === 1) return nums;
  const sum = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let Sum = 0;
    for (let j = i; j < k + i; j++) {
      Sum += nums[j];
    }
    sum.push(Sum);
  }

  return Math.max(...sum) / k;
};
