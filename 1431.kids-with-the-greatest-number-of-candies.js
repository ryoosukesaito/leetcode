/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const result = [];
  const mxValue = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= mxValue);
  }
  return result;
};
