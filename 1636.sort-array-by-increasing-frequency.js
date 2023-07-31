/**
 * https://leetcode.com/problems/sort-array-by-increasing-frequency/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const CountFreqMap = nums.reduce(
    (map, num) => map.set(num, (map.get(num) || 0) + 1),
    new Map()
  );

  return nums.sort((a, b) =>
    CountFreqMap.get(a) === CountFreqMap.get(b)
      ? b - a
      : CountFreqMap.get(a) - CountFreqMap.get(b)
  );
};
