/**
 * https://leetcode.com/problems/rank-transform-of-an-array/description/
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const SortArr = [...new Set([...arr].sort((a, b) => a - b))];
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    const findIdx = SortArr.findIndex((num) => num === arr[i]);
    res.push(findIdx + 1);
  }

  return res;
};
