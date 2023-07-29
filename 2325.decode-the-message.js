/**
 * https://leetcode.com/problems/decode-the-message/description/
 */

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//1st solution

// function getDecodeKey(keyVal) {
//     keyVal = keyVal.split('').filter(char => char !== ' ')
//     const set = new Set(keyVal)
//     const keySet = [...set]
//     const keyMap = new Map()

//     for (let i = 0; i < keySet.length; i++) {
//         keyMap.set(keySet[i], letter[i])
//     }
//     return keyMap;
// }

// var decodeMessage = function (key, message) {
//     const decodeKey = getDecodeKey(key)
//     let decodedMsg = "";
//     for (let i = 0; i < message.length; i++) {
//         let char = " ";
//         if (message[i] !== " ") {
//             char = decodeKey.get(message[i])
//         }
//         decodedMsg += char
//     }

//     return decodedMsg
// };

//2nd solution

// function getDecodeKey(keyVal) {
//     const keyMap = new Map()
//     const keySet = [...new Set(keyVal.split(' ').join('').split(''))]

//     for (let i = 0; i < keySet.length; i++) {
//         keyMap.set(keySet[i], letter[i])
//     }
//     keyMap.set(" ", " ")
//     return keyMap;
// }

// var decodeMessage = function (key, message) {
//     const decodeKey = getDecodeKey(key)
//     let decodedMsg = "";
//     for (let i = 0; i < message.length; i++) {
//         decodedMsg += decodeKey.get(message[i])
//     }

//     return decodedMsg
// };

//3rd regarding to solution for practice

function getKey(keys) {
  let saltKey = "";
  for (let char of keys) {
    if (char === " ") continue;
    if (saltKey.includes(char) === false) saltKey += char;
  }

  return saltKey;
}

var decodeMessage = function (key, message) {
  const decodedKey = getKey(key);
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let result = "";
  for (const char of message) {
    let findIdx = decodedKey.indexOf(char);
    findIdx === -1 ? (result += " ") : (result += alphabet[findIdx]);
  }

  return result;
};
