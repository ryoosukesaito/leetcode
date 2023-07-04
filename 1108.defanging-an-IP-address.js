/**
 * https://leetcode.com/problems/defanging-an-ip-address/description/
 */

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let ipAddress = "";

  for (let i = 0; i < address.length; i++) {
    let char = address[i];
    if (address[i] === ".") char = "[" + address[i] + "]";
    ipAddress += char;
  }

  return ipAddress;
};
