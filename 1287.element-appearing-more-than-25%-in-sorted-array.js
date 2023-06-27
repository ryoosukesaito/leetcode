/**
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  let map = {};

  for (const num of arr) {
    map[num] ? (map[num] += 1) : (map[num] = 1);
  }

  for (const [key, value] of Object.entries(map)) {
    if (value / arr.length > 1 / 4) return key;
  }
};
