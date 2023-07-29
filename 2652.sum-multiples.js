/**
 * https://leetcode.com/problems/sum-multiples/description/
 */

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let sum = 0;

  while (n > 1) {
    if (n % 3 === 0 || n % 5 === 0 || n % 7 === 0) sum += n;
    --n;
  }
  return sum;
};
