/**
 * https://leetcode.com/problems/detect-capital/description/
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word === word.toUpperCase() || word === word.toLowerCase()) return true;

  const CapitalizedLetter =
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  if (word === CapitalizedLetter) return true;

  return false;

  //RegExp -- regarding to solutions
  // return /^([A-Z]*|.[a-z]*)$/.test(word)
};
