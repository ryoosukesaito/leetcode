/**
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const largestNum = Math.max(...nums);
  let copyArr = [...nums];
  const secondLargeNum = Math.max(
    ...copyArr.sort().filter((num) => num !== largestNum)
  );

  if (largestNum / 2 >= secondLargeNum) {
    return nums.indexOf(largestNum);
  } else {
    return -1;
  }
};
