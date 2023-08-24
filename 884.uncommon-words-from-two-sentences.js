/**
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/description/
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const result = [];
  const ConcatArr = s1.split(" ").concat(s2.split(" "));

  const CountMap = ConcatArr.reduce(
    (map, word) => map.set(word, (map.get(word) || 0) + 1),
    new Map()
  );

  for (const [key, value] of CountMap) {
    if (value === 1) result.push(key);
  }

  return result;
};
