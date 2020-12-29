import { subarrayGivenSum } from './subarray-given-sum';

describe(subarrayGivenSum.name, () => {
  it('should work in the simple case', () => {
    const result = subarrayGivenSum([4], 4);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(4);
  });

  it('should not work in the simple case', () => {
    const result = subarrayGivenSum([4], 6);
    expect(result.length).toBe(0);
  });

  it('should work in the simple case two', () => {
    const result = subarrayGivenSum([4, 2], 6);
    expect(result.length).toBe(2);
    expect(result[0]).toBe(4);
    expect(result[1]).toBe(2);
  });

  it('should not work in the simple case two', () => {
    const result = subarrayGivenSum([4, 2], 7);
    expect(result.length).toBe(0);
  });

  it('should work in the simple case three', () => {
    const result = subarrayGivenSum([1, 4, 5, 3, 10], 12);
    expect(result.length).toBe(3);
    expect(result[0]).toBe(4);
    expect(result[1]).toBe(5);
    expect(result[2]).toBe(3);
  });
});