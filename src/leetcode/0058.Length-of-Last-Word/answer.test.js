const lengthOfLastWord = require('./answer');

test('lengthOfLastWord', () => {
  expect(lengthOfLastWord('hello world')).toBe(5);
})