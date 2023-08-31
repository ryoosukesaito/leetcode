/**
 * https://leetcode.com/problems/find-lucky-integer-in-an-array/description/
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let result = -1;
  const CountMap = arr.reduce(
    (map, num) => map.set(num, (map.get(num) || 0) + 1),
    new Map()
  );

  for (const [key, value] of CountMap) {
    if (key === value && result < value) result = value;
  }

  return result;
};
