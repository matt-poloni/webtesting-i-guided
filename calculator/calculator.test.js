// bring in whatever you're testing
const calculator = require('./calculator.js');

describe('calculator.js', () => {
  describe('add() method', () => {
    it('should return the sum of two numbers', () => {
      expect(calculator.add(2,2)).toBe(4);
      expect(calculator.add(2,1)).toBe(3);
      expect(calculator.add(0,1)).toBe(1);
    })

    it('should return 0 when called without args', () => {
      expect(calculator.add()).toBe(0);
    })

    it('should return sole value if only one is provided', () => {
      expect(calculator.add(1)).toBe(1);
    })

    it('should support any number of arguments', () => {
      expect(calculator.add(1,2,3)).toBe(6);
      expect(calculator.add(1,2,3,4)).toBe(10);
      expect(calculator.add(1,2,3,4,5)).toBe(15);
      expect(calculator.add(1,2,3,4,5,6)).toBe(21);
    })
  })
})
