const romanToInt = require('./answer');

test('romanToInt', () => {
  expect(romanToInt('III')).toBe(3);
})

test('romanToInt', () => {
  expect(romanToInt('IV')).toBe(4);
})

test('romanToInt', () => {
  expect(romanToInt('IX')).toBe(9);
})

test('romanToInt', () => {
  expect(romanToInt('LVIII')).toBe(58);
})

test('romanToInt', () => {
  expect(romanToInt('MCMXCIV')).toBe(1994);
})
