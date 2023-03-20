/**
 * https://leetcode.com/problems/keyboard-row/
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const keyboardArr = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i][0].toLowerCase();
    const keyTarget = keyboardArr.find((keyTarget) => keyTarget.includes(word));
    let count = 0;
    for (let j = 0; j < words[i].length; j++) {
      if (!keyTarget.includes(words[i][j].toLowerCase())) break;

      count++;

      if (count === words[i].length) result.push(words[i]);
    }
  }
  return result;
};
