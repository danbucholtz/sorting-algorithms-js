import { rearrangeNumbersAlternatingNoSpace } from './rearrange-numbers-alternating-no-space';

describe(rearrangeNumbersAlternatingNoSpace.name, () => {
  it('should rearrange example one', () => {
    const src = [1, 2, 3, 4, 5];
    rearrangeNumbersAlternatingNoSpace(src);
    expect(src[0]).toBe(5);
    expect(src[1]).toBe(1);
    expect(src[2]).toBe(4);
    expect(src[3]).toBe(2);
    expect(src[4]).toBe(3);
  });
});