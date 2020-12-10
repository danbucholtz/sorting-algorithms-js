import { Point } from './robot-grid';



export const QUEEN_MARKING = 'q';
export const DEFAULT_MARKING = '';

export function eightQueens(matrix: string[][]) {
  eightQueensImpl(matrix, 0, matrix.length);
}

function eightQueensImpl(matrix: string[][], currentRow: number, matrixSize: number) {
  if (currentRow >= matrixSize) {
    return;
  }

  for (let col = 0; col < matrixSize; col++) {
    // check each column for this row to see if it's a valid point
    if (isValidPoint(matrix, currentRow, col)) {
      matrix[currentRow][col] = QUEEN_MARKING;
      console.log(matrix);
      eightQueensImpl(matrix, currentRow + 1, matrixSize);
    }
  }
}

function isValidPoint(matrix: string[][], currentRow: number, col: number) {
  const log = currentRow === 0 && col === 1;

  for (let row = 0; row < matrix.length; row++) {
    // let's say we're at point row 3, col 4
    // we need to check to make sure there are no queens in row 3
    // so check across the row by iterating the columns
    if (log) {
      console.log(`The value of (${currentRow},${row}) is: `, matrix[currentRow][row]);
    }
    if (matrix[currentRow][row] === QUEEN_MARKING) {
      return false;
    }

    // we also need to make sure there are no queens in col 4 from the above example
    // so check up and down the col by iterating the rows
    if (log) {
      console.log(`The value of (${row},${col}) is: `, matrix[row][col]);
    }
    if (matrix[row][col] === QUEEN_MARKING) {
      return false;
    }

    // find the column of the queen for row variable -> row
    let whichColIsQueenInForRow = -1;
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[row][i] === QUEEN_MARKING) {
        whichColIsQueenInForRow = i;
        break;
      }
    }
    if (whichColIsQueenInForRow >= 0) {
      const colDiff = Math.abs(col - whichColIsQueenInForRow);
      const rowDiff = currentRow - row;
      if (colDiff === rowDiff) {
        // console.log(`Determined (${row},${whichColIsQueenInForRow}) is diagonal of (${currentRow},${col})`);
        return false;
      }
    }
  }
  
  console.log(`Determined (${currentRow},${col}) is a valid point`);
  
  return true;
}

/*function isValidPoint(matrix: string[][], point: Point) {

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[point.row][i] === QUEEN_MARKING) {
      return false;
    }
    if (matrix[i][point.col] === QUEEN_MARKING) {
      return false;
    }

    const upLeft: Point = {
      col: point.col - i,
      row: point.row - i
    };
    const downLeft: Point = {
      col: point.col - i,
      row: point.row + i
    };
    const upRight: Point = {
      col: point.col + i,
      row: point.row - i
    }
    const downRight: Point = {
      col: point.col + i,
      row: point.row + i
    }

    if (insMatrixRange(matrix, upLeft) && matrix[upLeft.row][upLeft.col] === QUEEN_MARKING) {
      return false;
    }

    if (insMatrixRange(matrix, downLeft) && matrix[downLeft.row][downLeft.col] === QUEEN_MARKING) {
      return false;
    }

    if (insMatrixRange(matrix, upRight) && matrix[upRight.row][upRight.col] === QUEEN_MARKING) {
      return false;
    }

    if (insMatrixRange(matrix, downRight) && matrix[downRight.row][downRight.col] === QUEEN_MARKING) {
      return false;
    }
    
  }

  console.log(`returning true for (${point.row}, ${point.col})`)
  return true;
}*/

function insMatrixRange(matrix: string[][], point: Point) {
  if (point.row < 0 || point.row >= matrix.length) {
    return false;
  }
  if (point.col < 0 || point.col >= matrix.length) {
    return false;
  }
  return true;
}