
export function zeroMatrix(matrix: number[][]) {
  const rows: boolean[] = [];
  const cols: boolean[] = [];
  for (let vertIndex = 0; vertIndex < matrix.length; vertIndex++) {
    for (let horIndex = 0; horIndex < matrix[vertIndex].length; horIndex++) {
      if (matrix[vertIndex][horIndex] === 0) {
        rows[vertIndex] = true;
        cols[horIndex] = true;
      }
    }
  }
  for (let i = 0; i < rows.length; i++) {
    rows[i] && zeroOutRow(i, matrix);
  }

  for (let i = 0; i < cols.length; i++) {
    cols[i] && zeroOutCol(i, matrix);
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