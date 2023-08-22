/**
 * https://leetcode.com/problems/three-consecutive-odds/description/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let i = 0;
  j = i + 1;

  while (j < arr.length) {
    let stock = [];
    if (arr[i] % 2 === 1) {
      stock.push(arr[i]);
      while (arr[j] % 2 === 1) {
        stock.push(arr[j]);
        j++;
      }
      i = j;
    }
    if (stock.length > 2) return true;
    i++;
    j = i + 1;
  }

  return false;

  // referring to solutions
  //     let count = 0

  //     for (let i = 0; count < 3 && i < arr.length; i++) {
  //         count = arr[i] % 2 === 1 ? count + 1 : 0
  //     }

  //     return count >= 3
};
