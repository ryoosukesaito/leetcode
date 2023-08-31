/**
 * https://leetcode.com/problems/number-of-senior-citizens/description/
 */

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let count = 0;
  details.map((detail) => {
    const age = detail.slice(11, 13);
    if (age > 60) count++;
  });
  return count;
};
