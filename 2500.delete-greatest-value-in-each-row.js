/**
 * https://leetcode.com/problems/delete-greatest-value-in-each-row/description/
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  const gridCopy = [...grid];
  if (gridCopy.length === 1) gridCopy.reduce((sum, num) => sum + num, 0);

  let result = 0;
  while (grid[0].length > 0) {
    let storeBeforeCulcArr = [];
    for (let i = 0; i < gridCopy.length; i++) {
      gridCopy[i].sort((a, b) => a - b);
      storeBeforeCulcArr.push(Math.max(...gridCopy[i]));
      gridCopy[i].pop();
    }

    const maxNum = Math.max(...storeBeforeCulcArr);
    result += maxNum;
    storeBeforeCulcArr = [];
  }
  return result;
};
