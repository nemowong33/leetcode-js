const searchInsert = require('./answer');

test('searchInsert', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
})