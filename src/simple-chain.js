const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${String(value)} )`); // Ensure value is converted to string
    return this; // Enable method chaining
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = []; // Reset the chain to avoid corruption
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.join("~~"); // Remove spaces around "~~"
    this.chain = []; // Reset the chain
    return result;
  },
};

module.exports = {
  chainMaker,
};
