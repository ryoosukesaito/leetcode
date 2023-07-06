/**
 * https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/description/
 */

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
const getScore = (nums) => {
  let strCount = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (strCount > 0) {
      sum += nums[i] * 2;
      strCount--;
    } else {
      sum += nums[i];
    }

    if (nums[i] === 10) strCount = 2;
  }
  return sum;
};

var isWinner = function (player1, player2) {
  const p1 = getScore(player1);
  const p2 = getScore(player2);

  const getJudge = (a, b) => {
    let judge = 0;
    if (a === b) return judge;
    a > b ? judge++ : (judge += 2);
    return judge;
  };

  return getJudge(p1, p2);
};
