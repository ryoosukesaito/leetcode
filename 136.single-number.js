/**
 * https://leetcode.com/problems/single-number/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if(nums.length === 1) return nums
  return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num))
};