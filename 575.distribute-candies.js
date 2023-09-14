/**
 * https://leetcode.com/problems/distribute-candies/
 */

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const SetCandyType = new Set(candyType);

  if (candyType.length / 2 > SetCandyType.size) return SetCandyType.size;

  return candyType.length / 2;
};
