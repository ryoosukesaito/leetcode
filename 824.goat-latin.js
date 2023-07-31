/**
 * https://leetcode.com/problems/goat-latin/description/
 */

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const Vowel = ["a", "e", "i", "o", "u"];

  const s = sentence.split(" ");
  const aArr = Array(s.length)
    .fill()
    .map((arr, idx) => Array(idx + 2).fill("a"));
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let word = s[i].split("");
    word.push("m");
    if (!Vowel.includes(word[0].toLowerCase())) {
      word.splice(-1, 0, word[0]);
      word.shift();
    }
    const concatWords = word.concat(aArr[i]).toString().replaceAll(",", "");
    result += concatWords + " ";
  }

  return result.trim();

  //regarding solution

  // const vowel = new Set(["a", "e", "i", "o", "u"]);
  // return sentence
  //   .split(" ")
  //   .map((value, i) => {
  //     return vowel.has(value[0].toLowerCase())
  //       ? value + "ma" + "a".repeat(i + 1)
  //       : value.slice(1) + value[0] + "ma" + "a".repeat(i + 1);
  //   })
  //   .join(" ");
};
