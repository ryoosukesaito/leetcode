/**
 * https://leetcode.com/problems/valid-mountain-array/description/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let i = 0;
  while (i < arr.length && arr[i] < arr[i + 1]) {
    if (arr[i] === arr[i + 1]) return false;
    i++;
  }

  if (i === arr.length - 1) return false;

  while (i < arr.length && arr[i] > arr[i + 1] && i !== 0) {
    if (arr[i] === arr[i + 1] || arr[i] < arr[i + 1]) return false;
    i++;
  }

  return i === arr.length - 1;
};
