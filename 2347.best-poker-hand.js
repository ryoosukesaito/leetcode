/**
 * https://leetcode.com/problems/best-poker-hand/description/
 */

/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (new Set(suits).size === 1) return "Flush";

  const elementCount = new Map();
  ranks.forEach((elem) => {
    elementCount.set(elem, (elementCount.get(elem) || 0) + 1);
  });

  let result = "High Card";
  for (const [elem, count] of elementCount.entries()) {
    if (count >= 3) return (result = "Three of a Kind");
  }

  if (new Set(ranks).size < 5) return (result = "Pair");

  return result;
};
