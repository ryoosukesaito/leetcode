/**
 * https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/description/
 */

/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
  let total = 0;

  cost
    .sort((a, b) => b - a)
    .map((num, idx) => {
      if ((idx + 1) % 3 !== 0) total += num;
    });

  return total;
};
