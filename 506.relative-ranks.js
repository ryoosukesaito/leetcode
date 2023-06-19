/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const copiedScore = [...score];
  const sortedScore = copiedScore.sort((a, b) => b - a);

  const scoreMap = new Map();

  for (let i = 0; i < sortedScore.length; i++) {
    const score = sortedScore[i];
    let rank;
    if (i === 0) {
      rank = "Gold Medal";
    } else if (i === 1) {
      rank = "Silver Medal";
    } else if (i === 2) {
      rank = "Bronze Medal";
    } else {
      rank = (i + 1).toString();
    }

    scoreMap.set(score, rank);
  }

  let result = [];

  for (let i = 0; i < score.length; i++) {
    result.push(scoreMap.get(score[i]));
  }
  return result;
};
