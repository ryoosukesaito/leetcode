/**
 *https://leetcode.com/problems/find-the-difference/description/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  if (s === "") return t;

  t = t.split("").sort();
  s = s.split("").sort();
  let mapT = {};
  let mapS = {};

  for (const strT of t) {
    mapT[strT] ? mapT[strT]++ : (mapT[strT] = 1);
  }
  for (const strS of s) {
    mapS[strS] ? mapS[strS]++ : (mapS[strS] = 1);
  }

  for (const [key, value] of Object.entries(mapT)) {
    const sValue = Object.getOwnPropertyDescriptor(mapS, key);

    if (!sValue || value !== sValue.value) return key;
  }
};
