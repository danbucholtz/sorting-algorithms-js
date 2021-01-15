import { sortArrayOfZeroOneTwo } from './sort-array-of-0-1-2';

describe(sortArrayOfZeroOneTwo.name, () => {
  it('should handle input one', () => {
    const input = [0, 1, 2, 0, 1, 2];
    sortArrayOfZeroOneTwo(input);
    expect(input[0]).toBe(0);
    expect(input[1]).toBe(0);
    expect(input[2]).toBe(1);
    expect(input[3]).toBe(1);
    expect(input[4]).toBe(2);
    expect(input[5]).toBe(2);
  });

  it('should handle input two', () => {
    const input = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
    sortArrayOfZeroOneTwo(input);
    expect(input[0]).toBe(0);
    expect(input[1]).toBe(0);
    expect(input[2]).toBe(0);
    expect(input[3]).toBe(0);
    expect(input[4]).toBe(0);
    expect(input[5]).toBe(1);
    expect(input[6]).toBe(1);
    expect(input[7]).toBe(1);
    expect(input[8]).toBe(1);
    expect(input[9]).toBe(1);
    expect(input[10]).toBe(2);
    expect(input[11]).toBe(2);
  });
});