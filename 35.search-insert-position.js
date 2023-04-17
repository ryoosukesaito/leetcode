/**
 * https://leetcode.com/problems/search-insert-position/description/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const findNum = nums.some((num) => num === target);
  if (findNum) return nums.findIndex((num) => num === target);

  nums.push(target);
  nums.sort((a, b) => a - b);
  return nums.findIndex((num) => num === target);
};
