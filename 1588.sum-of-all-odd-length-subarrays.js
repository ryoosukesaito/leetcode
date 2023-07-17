/**
 * https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let odd = 1;
  let sum = 0;

  while (odd <= arr.length) {
    for (let i = 0; i < arr.length; i++) {
      let copy = arr.slice(i, i + odd);

      if (copy.length === odd) sum = copy.reduce((acc, cur) => acc + cur, sum);
    }
    odd += 2;
  }
  return sum;
};
