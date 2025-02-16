const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Set default values for options
  const repeatTimes =
    options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const separator = options.separator !== undefined ? options.separator : "+";
  const addition =
    options.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimes =
    options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const additionSeparator =
    options.additionSeparator !== undefined ? options.additionSeparator : "|";

  // Build the addition string
  const additionString = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  // Build the main string
  const mainString = Array(repeatTimes)
    .fill(str + additionString)
    .join(separator);

  return mainString;
}

module.exports = {
  repeater,
};
