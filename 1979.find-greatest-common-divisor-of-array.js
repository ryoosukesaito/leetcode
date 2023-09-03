/**
 *  https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  let Min = Math.min(...nums),
    Max = Math.max(...nums);

  while (Min !== Max) {
    Max > Min ? (Max -= Min) : (Min -= Max);
  }

  return Max;
};
