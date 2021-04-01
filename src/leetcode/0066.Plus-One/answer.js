/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = ++digits[i] % 10;
    if (digits[i] === 0) {
      if (i === 0) {
        digits.unshift(1);
        break;
      } else {
        continue;
      }
    }
    break;
  }
  return digits;
};

module.exports = plusOne;