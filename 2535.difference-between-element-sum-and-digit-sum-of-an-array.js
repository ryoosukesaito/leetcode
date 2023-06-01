/**
 *https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let elementSum = 0;
  let digitSum = 0;
  for (let i = 0; i < nums.length; i++) {
    elementSum += nums[i];

    while (nums[i] > 0) {
      digitSum += nums[i] % 10;
      nums[i] = Math.floor(nums[i] / 10);
    }
  }
  return Math.abs(elementSum - digitSum);
};
