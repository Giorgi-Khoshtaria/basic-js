const { NotImplementedError } = require("../extensions/index.js");

/**
 * Generate a Minesweeper game setup based on the given matrix of mines.
 *
 * @param {Array<Array>} matrix The input matrix of mines.
 * @return {Array<Array>} The resulting Minesweeper setup.
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  if (rows === 0) return [];
  const cols = matrix[0].length;

  // Initialize the result matrix with zeros
  const result = new Array(rows);
  for (let i = 0; i < rows; i++) {
    result[i] = new Array(cols).fill(0);
  }

  // Define the eight possible directions for neighboring cells
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  // Iterate through each cell in the input matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        // If the cell contains a mine, increment all neighboring cells
        for (const [dx, dy] of directions) {
          const x = i + dx;
          const y = j + dy;
          if (x >= 0 && x < rows && y >= 0 && y < cols) {
            result[x][y]++;
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
