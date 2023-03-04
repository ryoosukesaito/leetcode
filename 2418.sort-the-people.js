/**
 * https://leetcode.com/problems/sort-the-people/description/
 */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const resultNameList = [];
  const heightsWithIdx = heights.map((height, idx) => {
    return { key: idx, height: height };
  });

  const nameWithIdx = names.map((name, idx) => {
    return { key: idx, name: name };
  });

  heightsWithIdx.sort((a, b) => a.height - b.height);

  for (let i = 0; i < heightsWithIdx.length; i++) {
    resultNameList.push(nameWithIdx[heightsWithIdx[i].key].name);
  }
  return resultNameList.reverse();
};
