const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!matrix.length || !matrix[0].length) return 0; // Handle empty matrix

  const rows = matrix.length;
  const cols = matrix[0].length;
  let sum = 0;

  // Track blocked columns
  const blockedColumns = new Set();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (blockedColumns.has(j)) {
        // Skip this cell if the column is blocked
        continue;
      }
      if (matrix[i][j] === 0) {
        // Block this column for all rows below
        blockedColumns.add(j);
      } else {
        // Add the value to the sum
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
