/**
 * https://leetcode.com/problems/decompress-run-length-encoded-list/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      const encodedArr = Array(nums[i]).fill(nums[i + 1]);
      result.push(...encodedArr);
    }
  }

  return result;
};
