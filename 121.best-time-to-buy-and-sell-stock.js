/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) minPrice = prices[i];
    profit = Math.max(profit, prices[i] - minPrice);
  }
  return profit;
};
