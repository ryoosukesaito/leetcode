/**
 * https://leetcode.com/problems/pascals-triangle/description/
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    let val1Arr = new Array(i + 1).fill(1);

    if (result.length > 1) {
      for (let j = 0; j < val1Arr.length; j++) {
        val1Arr[j] = (result[i - 1][j - 1] || 0) + (result[i - 1][j] || 0);
      }
    }
    result.push(val1Arr);
  }
  return result;
};
