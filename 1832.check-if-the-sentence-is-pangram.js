/**
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  sentence = Array.from(new Set(sentence)).join("");
  const Sentence = "abcdefghijklmnopqrstuvwxyz";
  for (const letter of Sentence) {
    if (!sentence.includes(letter)) return false;
  }
  return true;
};
