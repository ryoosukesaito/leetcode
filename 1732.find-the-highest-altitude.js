/**
 * https://leetcode.com/problems/find-the-highest-altitude/description/
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let highest = 0,
    location = 0;

  for (let i = 0; i < gain.length; i++) {
    location += gain[i];
    if (highest < location) highest = location;
  }

  return highest;
};
