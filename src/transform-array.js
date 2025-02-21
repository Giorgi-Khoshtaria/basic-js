/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let discardNext = false;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (discardNext) {
      discardNext = false;
      continue;
    }

    switch (current) {
      case "--discard-next":
        discardNext = true;
        break;

      case "--discard-prev":
        if (result.length > 0 && arr[i - 2] !== "--discard-next") {
          result.pop();
        }
        break;

      case "--double-next":
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;

      case "--double-prev":
        if (i - 1 >= 0 && arr[i - 2] !== "--discard-next") {
          result.push(arr[i - 1]);
        }
        break;

      default:
        result.push(current);
        break;
    }
  }
  return result;
}

module.exports = {
  transform,
};
