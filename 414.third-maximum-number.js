/**
 * https://leetcode.com/problems/third-maximum-number/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  if (nums.length < 3) return Math.max(...nums);

  let copyNumsArr = new Set([...nums]);
  if (copyNumsArr.size < 3) return Math.max(...copyNumsArr);

  let counter = 0;
  while (counter < 2) {
    const maxNum = Math.max(...copyNumsArr);
    copyNumsArr.delete(maxNum);
    counter++;
  }

  return Math.max(...copyNumsArr);
};
