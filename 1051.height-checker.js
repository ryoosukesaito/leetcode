/**
 * https://leetcode.com/problems/height-checker/description/
 */

/**
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function (heights) {
  const copyArr = [...heights];
  const sortedHeightsArr = copyArr.sort((a, b) => a - b);
  let diffCounter = 0;

  for (let i = 0; i < heights.length; i++) {
    if (sortedHeightsArr[i] !== heights[i]) {
      diffCounter++;
    }
  }
  return diffCounter;
};
