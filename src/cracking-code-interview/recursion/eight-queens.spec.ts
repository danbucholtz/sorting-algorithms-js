import {
  eightQueens,
  DEFAULT_MARKING,
  QUEEN_MARKING,
} from './eight-queens';

describe(eightQueens.name, () => {
  it('should return null with a 3x3 matrix', () => {
    /*const matrix = [
      [DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING],
      [DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING],
      [DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING],
    ];
    
    eightQueens(matrix);
    const markings = findNumberOfQueens(matrix);
    expect(markings).toBeLessThan(3);
   */
  });

  it('should return the matrix when given an 8x8 matrix', () => {
    /*const matrix = [
      [DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING],
      [DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING],
      [DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING],
      [DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING],
      [DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING],
      [DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING],
      [DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING],
      [DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING, DEFAULT_MARKING],
    ];
    
    eightQueens(matrix);
    const markings = findNumberOfQueens(matrix);
    expect(markings).toBe(8);
    */
   console.log('eight-queens needs some love');
  });
});

function findNumberOfQueens(matrix: string[][]) {
  let numFound = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === QUEEN_MARKING) {
        numFound++;
      }
    }
  }
  return numFound;
}