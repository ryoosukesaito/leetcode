/**
 * https://leetcode.com/problems/goal-parser-interpretation/description/
 */

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let output = "";
  let stack = [];

  for (let i = 0; i < command.length; i++) {
    let target = command[i];
    if (target === "(") {
      if (command[i + 1] === ")") {
        output += "o";
      } else {
        output += command[i + 1];
      }
      i++;
    } else if (target !== ")") {
      output += target;
    }
  }

  return output;
};
