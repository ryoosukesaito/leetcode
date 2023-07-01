/**
 *https://leetcode.com/problems/di-string-match/description/
 */
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  const arr = [];

  for (let i = 0; i < s.length + 1; i++) {
    arr.push(i);
  }

  let result = [];
  let idx = 0;
  while (arr.length > 0) {
    let copyArr = [...arr];
    if (s[idx] === "I") {
      result.push(Math.min(...copyArr));
      arr.shift();
    } else {
      result.push(Math.max(...copyArr));
      arr.pop();
    }
    idx++;
  }

  return result;
};
