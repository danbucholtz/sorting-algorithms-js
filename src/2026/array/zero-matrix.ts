export function zeroMatrix(matrix: number[][]) {
  // first, find all of the existing zeros and mark them
  // n^2
  const height = matrix.length;
  const width = matrix[0].length;

  const set = new Set<{ row: number; col: number }>();
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const value = matrix[row][col];
      if (value === 0) {
        set.add({ row, col });
      }
    }
  }
  // okay, let's wipe them out
  for (const { row, col } of set) {
    zeroOutRow(col, matrix);
    zeroOutCol(row, matrix);
  }
}

function zeroOutCol(rowNumber: number, matrix: number[][]) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][rowNumber] = 0;
  }
}

function zeroOutRow(colNumber: number, matrix: number[][]) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[colNumber][i] = 0;
  }
}
