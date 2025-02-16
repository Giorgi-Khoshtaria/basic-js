const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const firstLetters = [];
  members.forEach((member) => {
    if (typeof member === "string" && member.trim().length > 0) {
      const firstLetter = member.trim()[0].toUpperCase();
      firstLetters.push(firstLetter);
    }
  });
  firstLetters.sort();
  return firstLetters.join("");
}

module.exports = {
  createDreamTeam,
};
