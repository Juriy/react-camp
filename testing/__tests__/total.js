const math = require('../math');
const getTotal = require('../total');

// monkey patching
// test('returns the total', () => {
  //   const result = getTotal([1,2,3,4]);
//   const expected = 1;
//   expect(result).toBe(expected);
// })

  
// group tests together
// let origialAdd;
// describe('getTotal', () => {
//   beforeEach(() => {
//     origialAdd = math.add;
//     math.add = () => 1;
//   })
//   afterEach(() => {
//     math.add = origialAdd;
//   })
  
//   test('returns the total', () => {
//     const result = getTotal([1,2,3,4]);
//     const expected = 1;
//     expect(result).toBe(expected);
//   })
// })


// jest.fn()
// test('returns the total', () => {
//   const origialAdd = math.add;
//   const mockFn = jest.fn(() => 1);
//   math.add = mockFn;
  
//   const result = getTotal([1,2,3,4]);
//   const expected = 1;
//   expect(result).toBe(expected);
//   expect(mockFn).toHaveBeenCalledTimes(4);

//   math.add = origialAdd;
// })

// spies
test('returns the total', () => {
  const mockFn = () => 1;
  jest.spyOn(math, 'add')
  math.add.mockImplementation(mockFn)
  
  const result = getTotal([1,2,3,4]);
  const expected = 1;
  expect(result).toBe(expected);
  expect(math.add).toHaveBeenCalledTimes(4);

  math.add.mockRestore();
})

// jest.mock() with override
//jest.mock('../math', () => ({ add: jest.fn(() => 1) }))

// jest.mock() from __mocks__ if defined
