/**
 * https://leetcode.com/problems/delete-greatest-value-in-each-row/description/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  const gridCopy = [...grid];
  if (gridCopy[0].length === 1) return grid;

  let result = 0;
  while (grid[0].length > 0) {
    let storeBeforeCulcArr = [];
    for (let i = 0; i < gridCopy.length; i++) {
      gridCopy[i].sort((a, b) => a - b);
      storeBeforeCulcArr.push(gridCopy[i].pop());
    }
    result += Math.max(...storeBeforeCulcArr);
    storeBeforeCulcArr = [];
  }
  return result;
};
