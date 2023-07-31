/**
 *
 */

/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  // this solution is purposely separated into individual conditions for building and understanding that easily

  if (password.length < 8) {
    return false;
  }

  if (!password.match(/[a-z]/)) {
    return false;
  }

  if (!password.match(/[A-Z]/)) {
    return false;
  }

  if (!password.match(/[0-9]/)) {
    return false;
  }
  if (!/[!@#$%^&*()\-+]/.test(password)) {
    return false;
  }

  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1]) return false;
  }

  return true;

  // solution with reference
  // const passAuth = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?!.*(.)\1+)(?=.{8,})/g;
  // return passAuth.test(password)
};
