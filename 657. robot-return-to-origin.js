/**
 * https://leetcode.com/problems/robot-return-to-origin/description/
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let location = [0, 0];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "R") ++location[0];
    else if (moves[i] === "L") --location[0];
    else if (moves[i] === "U") ++location[1];
    else --location[1];
  }

  return location[0] === 0 && location[1] === 0;

  // solution with reference
  // const position = [...moves].reduce((pos, move) => {
  //     switch (move) {
  //         case 'R': return [pos[0] + 1, pos[1]];
  //         case 'L': return [pos[0] - 1, pos[1]];
  //         case 'U': return [pos[0], pos[1] + 1];
  //         case 'D': return [pos[0], pos[1] - 1];
  //     }
  // }, [0, 0])

  // return position.every(p => p === 0);
};
