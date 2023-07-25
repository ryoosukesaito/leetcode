/**
 * https://leetcode.com/problems/buy-two-chocolates/description/
 */

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  const SortedPrices = [...prices].sort((a, b) => a - b);

  if (money >= SortedPrices[0] + SortedPrices[1])
    return money - (SortedPrices[0] + SortedPrices[1]);
  return money;
};
