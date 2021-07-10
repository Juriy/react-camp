const { add, substract, addAsync, substractAsync } = require('../math');

test('sum adds numbers', () => {
  const result = add(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('substract substracts numbers', () => {
  const result = substract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test('addAsync adds numbers asynchronously', async () => {
  const result = await addAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('substractAsync substracts numbers asynchronously', async () => {
  const result = await substractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
