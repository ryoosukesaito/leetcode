/**
 * https://leetcode.com/problems/search-insert-position/description/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const copyNumsArr = [...nums];
  const findNum = copyNumsArr.some((num) => num === target);
  if (findNum) return copyNumsArr.findIndex((num) => num === target);

  copyNumsArr.push(target);
  copyNumsArr.sort((a, b) => a - b);
  return copyNumsArr.findIndex((num) => num === target);
};
