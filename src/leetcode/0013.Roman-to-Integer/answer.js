/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  const strAry = s.split('');

  let sum = 0;

  for (let i = strAry.length - 1; i >= 0; i--) {
    const current = map[strAry[i]];
    if (i === strAry.length - 1 || current >= map[strAry[i + 1]]) {
      sum += current;
    } else {
      sum -= current;
    }
  }

  return sum;
};

module.exports = romanToInt;
