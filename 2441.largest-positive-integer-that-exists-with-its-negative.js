/**
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxK = function (nums) {
  let result = -1;
  const arrNums = nums;
  for (let i = 0; i < arrNums.length; i++) {
    for (let j = i + 1; j <= arrNums.length; j++) {
      if (arrNums[i] + arrNums[j] === 0) {
        let largestNum = Math.max(arrNums[i], arrNums[j]);
        if (largestNum > result) {
          result = largestNum;
        }
      }
    }
  }
  return result;
};
