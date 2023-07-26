/**
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/description/
 */

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  const N = n.split("");
  return Math.max(...N);
};
