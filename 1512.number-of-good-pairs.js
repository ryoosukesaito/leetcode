/**
 * https://leetcode.com/problems/number-of-good-pairs/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    nums.map((num, idx) => {
      if (nums[i] == num && i != idx && i < idx) {
        count++;
      }
    });
  }
  return count;
};
