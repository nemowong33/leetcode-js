/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var len = s.length,
    max = 0,
    chars = new Set(),
    leftBound = 0,
    ch,
    i;

  for (i = 0; i < len; i++) {
    ch = s.charAt(i);

    if (chars.has(ch)) {
      while (leftBound < i && s.charAt(leftBound) !== ch) {
        chars.delete(s.charAt(leftBound));
        leftBound++;
      }
      leftBound++;
    } else {
      chars.add(ch);
      max = Math.max(max, i - leftBound + 1);
    }
  }

  return max;
};