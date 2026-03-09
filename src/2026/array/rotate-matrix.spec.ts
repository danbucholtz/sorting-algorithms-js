import { describe, expect, it } from 'vitest';
import { rotateMatrix } from './rotate-matrix';

describe(rotateMatrix.name, () => {
  it('should rotate a matrix', () => {
    const matrix: string[][] = [
      ['a', 'b'],
      ['c', 'd'],
    ];

    const expected: string[][] = [
      ['c', 'a'],
      ['d', 'b'],
    ];

    rotateMatrix(matrix);

    expect(matrix).toEqual(expected);
  });

  it('should rotate a 3x3 matrix', () => {
    const matrix: string[][] = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ];

    const expected: string[][] = [
      ['7', '4', '1'],
      ['8', '5', '2'],
      ['9', '6', '3'],
    ];

    rotateMatrix(matrix);

    expect(matrix).toEqual(expected);
  });

  it('should rotate a 4x4 matrix', () => {
    const matrix: number[][] = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const expected: number[][] = [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ];

    rotateMatrix(matrix);

    expect(matrix).toEqual(expected);
  });

  it('should rotate a 5x5 matrix', () => {
    const matrix: number[][] = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    const expected: number[][] = [
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5],
    ];

    rotateMatrix(matrix);

    expect(matrix).toEqual(expected);
  });
});
