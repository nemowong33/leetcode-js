const plusOne = require('./answer');

test('plusOne', () => {
  expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4])
})

test('plusOne', () => {
  expect(plusOne([9])).toStrictEqual([1, 0])
})