/**
 * https://leetcode.com/problems/sum-of-unique-elements/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let result = 0;

  const CountMap = nums.reduce(
    (map, num) => map.set(num, (map.get(num) || 0) + 1),
    new Map()
  );
  for (const [key, value] of CountMap) {
    if (value === 1) result += key;
  }

  return result;
};
