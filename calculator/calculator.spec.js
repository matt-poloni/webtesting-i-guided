const { add } = require('./calculator.js');

it('runs the tests', () => {
  // arrange -> setup
  const expected = true;
  // act -> run the system under a test
  const actual = true;
  // assert -> verify that it works
  expect(actual).toBe(expected);
})
