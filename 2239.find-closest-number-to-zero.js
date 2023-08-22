/**
 * https://leetcode.com/problems/find-closest-number-to-zero/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  let NumOfClosestToZero = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(NumOfClosestToZero) >= Math.abs(nums[i])) {
      Math.abs(NumOfClosestToZero) === Math.abs(nums[i])
        ? (NumOfClosestToZero = Math.max(NumOfClosestToZero, nums[i]))
        : (NumOfClosestToZero = nums[i]);
    }
  }

  return NumOfClosestToZero;
};
