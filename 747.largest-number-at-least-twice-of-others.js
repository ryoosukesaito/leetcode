/**
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const largestNum = Math.max(...nums);
  const copyArr = [...nums];
  const secondLargeNum = Math.max(
    ...copyArr.sort().filter((num) => num !== largestNum)
  );

  return largestNum / 2 >= secondLargeNum ? nums.indexOf(largestNum) : -1;
};
