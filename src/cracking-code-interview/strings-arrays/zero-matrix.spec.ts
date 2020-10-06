import { zeroMatrix } from './zero-matrix';

describe(zeroMatrix.name, () => {
  it('should fill the row and col with 0s wherever an index with 0 is found', () => {
    const input = [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9],
    ];
    zeroMatrix(input);

    const expected = [
      [1, 0, 3],
      [0, 0, 0],
      [7, 0, 9],
    ]

    expect(input[0][0]).toBe(expected[0][0]);
    expect(input[0][1]).toBe(expected[0][1]);
    expect(input[0][2]).toBe(expected[0][2]);

    expect(input[1][0]).toBe(expected[1][0]);
    expect(input[1][1]).toBe(expected[1][1]);
    expect(input[1][2]).toBe(expected[1][2]);

    expect(input[2][0]).toBe(expected[2][0]);
    expect(input[2][1]).toBe(expected[2][1]);
    expect(input[2][2]).toBe(expected[2][2]);
  });

  it('should do another test with the 0 in last index', () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0],
    ];

    zeroMatrix(input);

    const expected = [
      [1, 2, 0],
      [4, 5, 0],
      [0, 0, 0],
    ]

    expect(input[0][0]).toBe(expected[0][0]);
    expect(input[0][1]).toBe(expected[0][1]);
    expect(input[0][2]).toBe(expected[0][2]);

    expect(input[1][0]).toBe(expected[1][0]);
    expect(input[1][1]).toBe(expected[1][1]);
    expect(input[1][2]).toBe(expected[1][2]);

    expect(input[2][0]).toBe(expected[2][0]);
    expect(input[2][1]).toBe(expected[2][1]);
    expect(input[2][2]).toBe(expected[2][2]);
  });

  it('should do another test with the 0 in first index', () => {
    const input = [
      [0, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    zeroMatrix(input);

    const expected = [
      [0, 0, 0],
      [0, 5, 6],
      [0, 8, 9],
    ]

    expect(input[0][0]).toBe(expected[0][0]);
    expect(input[0][1]).toBe(expected[0][1]);
    expect(input[0][2]).toBe(expected[0][2]);

    expect(input[1][0]).toBe(expected[1][0]);
    expect(input[1][1]).toBe(expected[1][1]);
    expect(input[1][2]).toBe(expected[1][2]);

    expect(input[2][0]).toBe(expected[2][0]);
    expect(input[2][1]).toBe(expected[2][1]);
    expect(input[2][2]).toBe(expected[2][2]);
  });
});