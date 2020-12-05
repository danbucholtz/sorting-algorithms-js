import { paintFill } from './paint-fill';


describe(paintFill.name, () => {
  it('should fill in the entire color from g to b', () => {
    const matrix = [
      ['g', 'g', 'g', 'g'],
      ['g', 'g', 'g', 'g'],
      ['g', 'g', 'g', 'g'],
      ['g', 'g', 'g', 'g']
    ];
    paintFill(matrix, 2, 1, 'b');
    for (const row of matrix) {
      for (const col of row) {
        expect(col).toBe('b');
      }
    }
  });

  it('should not change any other colors', () => {
    const matrix = [
      ['o', 'o', 'o', 'o'],
      ['o', 'g', 'g', 'o'],
      ['o', 'g', 'g', 'o'],
      ['o', 'o', 'o', 'o']
    ];
    paintFill(matrix, 2, 1, 'b');
    // assert that the parameter is o
    for (let i = 0; i < matrix.length; i++) {
      expect(matrix[i][0]).toBe('o');
      expect(matrix[i][matrix.length - 1]).toBe('o');
      expect(matrix[0][i]).toBe('o');
      expect(matrix[matrix.length - 1][i]).toBe('o');
    }
    expect(matrix[1][1]).toBe('b');
    expect(matrix[1][2]).toBe('b');
    expect(matrix[2][1]).toBe('b');
    expect(matrix[2][2]).toBe('b');
  });
});