/**
 * https://leetcode.com/problems/lemonade-change/description/
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let Five = 0,
    Ten = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) Five++;
    if (bills[i] === 10) {
      Ten++;
      Five--;
    }
    if (bills[i] === 20) {
      if (Ten > 0 && Five > 0) {
        Ten--;
        Five--;
      } else if (Five > 2) Five -= 3;
      else return false;
    }

    if (Five < 0 || Ten < 0) return false;
  }

  return true;
};
