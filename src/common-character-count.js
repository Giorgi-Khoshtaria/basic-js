const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0; // Initialize count to 0
  let s2Array = s2.split(""); // Convert s2 into an array

  for (let char of s1) {
    let index = s2Array.indexOf(char);
    if (index !== -1) {
      count++; // Found a common character, increase count
      s2Array.splice(index, 1); // Remove the matched character to avoid duplicate counting
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
