import { rearrangeNumbersAlternating } from './rearrange-numbers-alternating-with-space';

describe(rearrangeNumbersAlternating.name, () => {
  it('should return an alternating list', () => {
    const src = [1, 2, 3, 4, 5];
    const results = rearrangeNumbersAlternating(src);
    expect(results[0]).toBe(5);
    expect(results[1]).toBe(1);
    expect(results[2]).toBe(4);
    expect(results[3]).toBe(2);
    expect(results[4]).toBe(3);
  });

  it('should return an alternating list', () => {
    const src = [1, 4, 9, 14];
    const results = rearrangeNumbersAlternating(src);
    expect(results[0]).toBe(14);
    expect(results[1]).toBe(1);
    expect(results[2]).toBe(9);
    expect(results[3]).toBe(4);
  });
});