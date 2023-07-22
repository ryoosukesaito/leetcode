/**
 * https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/
 */

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let countWord = 0;
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i].split(/\s/g);
    if (countWord < sentence.length) countWord = sentence.length;
  }
  return countWord;
};
