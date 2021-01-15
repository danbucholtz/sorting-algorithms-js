import { reverseArrayInGroups } from './reverse-array-groups';

describe(reverseArrayInGroups.name, () => {
  it('should return the same array for an array with one item', () => {
    const results = reverseArrayInGroups([1], 1);
    expect(results.length).toBe(1);
    expect(results[0]).toBe(1);
  });

  it('should handle basic input one', () => {
    const results = reverseArrayInGroups([1, 2, 3, 4, 5], 3);
    expect(results.length).toBe(5);
    expect(results[0]).toBe(3);
    expect(results[1]).toBe(2);
    expect(results[2]).toBe(1);
    expect(results[3]).toBe(5);
    expect(results[4]).toBe(4);
  });
  
  it('should handle basic input two', () => {
    const results = reverseArrayInGroups([5, 6, 8, 9], 3);
    expect(results.length).toBe(4);
    expect(results[0]).toBe(8);
    expect(results[1]).toBe(6);
    expect(results[2]).toBe(5);
    expect(results[3]).toBe(9);
  });
  
});