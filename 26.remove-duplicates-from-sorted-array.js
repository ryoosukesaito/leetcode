/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const removedSameNumArr = [...new Set(nums)];

  for (let i = 0; i < removedSameNumArr.length; i++) {
    nums[i] = removedSameNumArr[i];
  }

  return removedSameNumArr.length;
};
