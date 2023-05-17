/**
 * https://leetcode.com/problems/min-max-game/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  if (nums.length === 1) return nums;

  let newNums = [];

  while (nums.length > 1) {
    for (let i = 0; i < nums.length / 2; i++) {
      if (i % 2 !== 1) {
        newNums.push(Math.min(nums[2 * i], nums[2 * i + 1]));
      } else {
        newNums.push(Math.max(nums[2 * i], nums[2 * i + 1]));
      }
    }
    nums = newNums;
    newNums = [];
  }
  return nums;
};
