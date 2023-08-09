/**
 * https://leetcode.com/problems/find-common-characters/description/
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const Arr = words[0].split("");
  const result = [];

  for (const letter of Arr) {
    if (words.every((word) => word.includes(letter))) {
      words = words.map((word) => word.replace(letter, ""));
      result.push(letter);
    }
  }

  return result;
};
