/**
 * https://leetcode.com/problems/unique-morse-code-words/description/
 */
/**
 * @param {string[]} words
 * @return {number}
 */

const morseCode = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

function convertToMorseAsArrFunc(arrs) {
  const morseArr = [];
  for (const word of arrs) {
    let morseChar = "";
    for (let j = 0; j < word.length; j++) {
      const keyToGetMorseCode = word.charCodeAt(j) - 97;
      morseChar += morseCode[keyToGetMorseCode];
    }
    morseArr.push(morseChar);
  }
  return morseArr;
}

var uniqueMorseRepresentations = function (words) {
  const setMorseWords = new Set(convertToMorseAsArrFunc(words));
  return setMorseWords.size;
};
