/**
 * https://leetcode.com/problems/concatenation-of-array/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  const arrCopy= [...nums];
  return nums.concat(arrCopy)
};