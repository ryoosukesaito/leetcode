/**
 * https://leetcode.com/problems/arranging-coins/description/
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let counter = 0;
  let supposedCoinsNum = 1;

  while (n >= 0) {
    n = n - supposedCoinsNum;
    if (n <= -1) return counter;

    supposedCoinsNum++;
    counter++;
  }
};
