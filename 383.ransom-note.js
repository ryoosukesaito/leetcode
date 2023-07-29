/**
 * https://leetcode.com/problems/ransom-note/description/
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomCountMap = setNewMap(ransomNote);
  const MagCharCountMap = setNewMap(magazine);

  for (const [key, value] of ransomCountMap.entries()) {
    if (
      !MagCharCountMap.has(key) ||
      MagCharCountMap.get(key) < ransomCountMap.get(key)
    )
      return false;
  }

  return true;
};

function setNewMap(str) {
  return str
    .split("")
    .reduce((map, char) => map.set(char, (map.get(char) || 0) + 1), new Map());
}
