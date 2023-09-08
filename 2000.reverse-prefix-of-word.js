/**
 * https://leetcode.com/problems/reverse-prefix-of-word/description/
 */

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const WordArr = word.split("");
  const ResArr = Array(WordArr.length).fill();

  const FindIdx = WordArr.findIndex((char) => char === ch);

  for (let i = 0; i < WordArr.length; i++) {
    if (FindIdx === i) {
      i++;
      for (let j = FindIdx, idx = 0; j >= 0 && idx <= FindIdx; j-- && idx++) {
        ResArr[idx] = WordArr[j];
      }
    }
    ResArr[i] = WordArr[i];
  }

  return ResArr.join("");
};
