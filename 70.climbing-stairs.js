/**
 * https://leetcode.com/problems/climbing-stairs/description/
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const countTheWay = [1, 2];

  let location = 2;
  while (location < n) {
    countTheWay[location] =
      countTheWay[location - 1] + countTheWay[location - 2];
    location++;
  }

  return countTheWay[n - 1];
};
