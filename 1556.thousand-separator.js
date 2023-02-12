/**
 * https://leetcode.com/problems/thousand-separator/description/
 */

/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  const thousandSeparator = n.toLocaleString().replaceAll(',', '.');
  return thousandSeparator;
};