/**
 * https://leetcode.com/problems/goal-parser-interpretation/description/
 */

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let output = "";

  for (let i = 0; i < command.length; i++) {
    const target = command[i] + command[i + 1];
    if (target === "()") {
      output += "o";
      i++;
    } else if (target === "(a") {
      output += "al";
      i += 3;
    } else {
      output += target[0];
    }
  }

  return output;

  //regarding to solution which is using easier method
  // return command.replaceAll("()", "o").replaceAll("(al)", al);
};
