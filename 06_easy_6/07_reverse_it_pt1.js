/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Easy 6
 *
 * Reverse It (Part 1)
 *
 * https://launchschool.com/exercises/866dd469
 *
 */


/**
 * Given a sentence of words separated by spaces, return the sentence with the
 * words in reverse order.
 * @param {String} sentence the sentence of words to reverse
 * @returns {String} the words in `sentence` in reverse order
 */
function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

module.exports = {
  reverseSentence,
};
