/**
 * https://leetcode.com/problems/maximum-product-of-three-numbers/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function (nums) {
  nums.sort((a, b) => b - a);
  const positiveSum = nums[0] * nums[1] * nums[2];
  const negativeTwo = nums[0] * nums[nums.length - 1] * nums[nums.length - 2];
  return positiveSum > negativeTwo ? positiveSum : negativeTwo;
};
