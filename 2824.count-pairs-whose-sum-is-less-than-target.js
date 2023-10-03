/**
 * https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (sum < target) count++;
    }
  }

  return count;
};
