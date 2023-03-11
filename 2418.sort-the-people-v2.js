/**
 * https://leetcode.com/problems/sort-the-people/description/
 */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const heightMap = new Map();
  for (let i = 0; i < heights.length; i++) {
    heightMap.set(heights[i], names[i]);
  }

  const sortedMap = new Map(
    [...heightMap.entries()].sort((a, b) => b[0] - a[0])
  );
  return [...sortedMap.values()];
};
