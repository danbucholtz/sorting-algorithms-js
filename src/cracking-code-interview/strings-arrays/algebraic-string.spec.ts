import { calculateString } from './algebraic-string';

describe(calculateString.name, () => {
  it('should work on a big long string', () => {

    const value = calculateString(['1', '+', '3', '*', '6', '*', '4', '+', '5', '*', '3', '+', '6']);
    expect(value).toBe(94);
  });

  it('should work on a basic addition string', () => {

    const value = calculateString(['1', '+', '3']);
    expect(value).toBe(4);
  });

  it('should work on a basic multiplication string', () => {

    const value = calculateString(['1', '*', '3']);
    expect(value).toBe(3);
  });

  it('should work on a basic multiplication string', () => {

    const value = calculateString(['1', '*', '3', '+', '5']);
    expect(value).toBe(8);
  });

  it('should work on a basic multiplication string', () => {

    const value = calculateString(['1', '*', '3', '+', '5', '*', '10', '*', '5']);
    expect(value).toBe(253);
  });
});