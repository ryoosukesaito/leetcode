/**
 * https://leetcode.com/problems/build-array-from-permutation/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const result = [];
  nums.map((num, idx) => {
    result.push(nums[num]);
  });
  return result;
};
