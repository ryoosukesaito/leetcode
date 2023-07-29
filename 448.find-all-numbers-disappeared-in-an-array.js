/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const result = [];
  const setNums = [...new Set(nums.sort((a, b) => a - b))];
  let checkCounter = 0;

  for (let i = 1; i < nums.length + 1; i++) {
    i !== setNums[checkCounter] ? result.push(i) : checkCounter++;
  }

  return result;
};
