import { permutationsWithoutDupes } from './permutations-without-dups';

describe(permutationsWithoutDupes.name, () => {
  /*it('should return a single permutation for input a', () => {
    const result = permutationsWithoutDupes('a');
    expect(result.length).toBe(1);
    expect(result[0].length).toBe(1);
    expect(result[0][0]).toBe('a');
  });
  */

  it('should return ab, ba permutations for input ab', () => {
    const result = permutationsWithoutDupes('ab');
    expect(result.length).toBe(2);
    expect(result[0][0]).toBe('b');
    expect(result[0][1]).toBe('a');
    expect(result[1][0]).toBe('a');
    expect(result[1][1]).toBe('b');
  });

  it('should return 6 permutations for input abc', () => {
    const result = permutationsWithoutDupes('abc');
    /*
    [ 'c', 'a', 'b' ],
        [ 'b', 'c', 'a' ],
        [ 'b', 'a', 'c' ],
        [ 'c', 'b', 'a' ],
        [ 'a', 'c', 'b' ],
        [ 'a', 'b', 'c' ]
    */
    expect(result[0][0]).toBe('c');
    expect(result[0][1]).toBe('a');
    expect(result[0][2]).toBe('b');

    expect(result[1][0]).toBe('b');
    expect(result[1][1]).toBe('c');
    expect(result[1][2]).toBe('a');

    expect(result[2][0]).toBe('b');
    expect(result[2][1]).toBe('a');
    expect(result[2][2]).toBe('c');

    expect(result[3][0]).toBe('c');
    expect(result[3][1]).toBe('b');
    expect(result[3][2]).toBe('a');

    expect(result[4][0]).toBe('a');
    expect(result[4][1]).toBe('c');
    expect(result[4][2]).toBe('b');

    expect(result[5][0]).toBe('a');
    expect(result[5][1]).toBe('b');
    expect(result[5][2]).toBe('c');
  });
});