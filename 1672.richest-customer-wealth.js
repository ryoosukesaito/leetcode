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
    let initialValue = 0;
    const total = accounts[i].reduce((acc, curr) => acc + curr, initialValue);
    result.push(total);
  }
  return Math.max(...result);
};
