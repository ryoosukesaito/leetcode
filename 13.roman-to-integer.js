/**
 * https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&id=top-interview-150
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (romanSymbols[s[i]] < romanSymbols[s[i + 1]]) {
      result += romanSymbols[s[i + 1]] - romanSymbols[s[i]];
      i++;
    } else {
      result += romanSymbols[s[i]];
    }
  }
  return result;
};
