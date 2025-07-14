const { add } = require('../../utils/sampleUtil');

test('adds two numbers correctly', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, 1)).toBe(0);
});
