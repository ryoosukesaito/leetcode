/**
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const resultArr = [];

  for (let i = 0; i < nums.length; i++) {
    let counterInt = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) counterInt++;
    }

    resultArr.push(counterInt);
  }

  return resultArr;
};
