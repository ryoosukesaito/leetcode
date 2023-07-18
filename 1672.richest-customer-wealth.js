/**
 * https://leetcode.com/problems/richest-customer-wealth/description/
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const result = [];
  for (let i = 0; i < accounts.length; i++) {
    const total = accounts[i].reduce((acc, curr) => acc + curr, 0);
    result.push(total);
  }
  return Math.max(...result);
};
