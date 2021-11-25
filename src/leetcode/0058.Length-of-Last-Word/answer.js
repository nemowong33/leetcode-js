/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const ary = s.trim().split(' ');
  return ary[ary.length - 1].length
};

module.exports = lengthOfLastWord;