/**
 * https://leetcode.com/problems/contains-duplicate/description/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const removedDuplicatedNum = new Set([...nums]);

  if (removedDuplicatedNum.size !== nums.length) {
    return true;
  } else {
    return false;
  }
};
