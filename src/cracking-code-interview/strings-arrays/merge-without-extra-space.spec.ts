import { mergeWithoutExtraSpaceOptimal } from './merge-without-extra-space';


describe(mergeWithoutExtraSpaceOptimal.name, () => {
  it('should merge the arrays one', () => {
    const one = [1, 3, 5, 7];
    const two = [0, 2, 6, 8, 9];
    mergeWithoutExtraSpaceOptimal(one, two);
    expect(one[0]).toBe(0);
    expect(one[1]).toBe(1);
    expect(one[2]).toBe(2);
    expect(one[3]).toBe(3);
    expect(two[0]).toBe(5);
    expect(two[1]).toBe(6);
    expect(two[2]).toBe(7);
    expect(two[3]).toBe(8);
    expect(two[4]).toBe(9);
  })
});