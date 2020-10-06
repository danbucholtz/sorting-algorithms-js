import { rotateMatrix } from './rotate-matrix';

describe(rotateMatrix.name, () => {
  it('should rotate a matrix', () => {
    const matrix: string[][] = [
      ['a', 'b',],
      ['c', 'd',],
    ];
    rotateMatrix(matrix);
    expect(matrix[0][0]).toBe('c');
    expect(matrix[0][1]).toBe('a');
    expect(matrix[1][0]).toBe('d');
    expect(matrix[1][1]).toBe('b');
  });

  it('should rotate a bigger matrix', () => {
    /*const matrix: string[][] = [
      ['1', '2', '3',],
      ['4', '5', '6',],
      ['7', '8', '9',]
    ];

    const expected: string[][] = [
      ['7', '4', '1',],
      ['8', '5', '2',],
      ['9', '6', '3',],
    ]

    rotateMatrix(matrix);

    console.log('matrix: ', matrix);
    expect(matrix[0][0]).toBe('7');
    expect(matrix[0][1]).toBe('4');
    expect(matrix[0][1]).toBe('1');
    expect(matrix[1][0]).toBe('8');
    expect(matrix[1][1]).toBe('5');
    expect(matrix[1][2]).toBe('2');
    expect(matrix[2][0]).toBe('9');
    expect(matrix[2][1]).toBe('6');
    expect(matrix[2][2]).toBe('3');
*/
  });
});