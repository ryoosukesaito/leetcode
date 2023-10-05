/**
 * https://leetcode.com/problems/count-items-matching-a-rule/
 */

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

const KeyAndValueMap = new Map();
KeyAndValueMap.set("type", 0);
KeyAndValueMap.set("color", 1);
KeyAndValueMap.set("name", 2);

var countMatches = function (items, ruleKey, ruleValue) {
  const KeyValue = KeyAndValueMap.get(ruleKey);
  const Count = items.reduce((counter, item) => {
    if (item[KeyValue] === ruleValue) counter++;
    return counter;
  }, 0);
  return Count;
};
