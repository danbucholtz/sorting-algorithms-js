
export interface Point {
  row: number;
  col: number;
}

export const CANT_VISIT_NODE_VALUE = -1;

export function robotGrid(matrix: number[][]) {
  const numRows = matrix.length - 1;
  const numCols = matrix[0].length - 1;
  const paths: Point[] = [];
  if (walkPath(matrix, 0, 0, numRows, numCols, paths)) {
    return paths.reverse();
  }
  return [];
}

function walkPath(matrix: number[][], currentRow: number, currentCol: number, numRows: number, numCols: number, currentPath: Point[]): boolean {
  //console.log(`The robot's ${currentPath.length}th node is (${currentRow}, ${currentCol}) or a value of ${matrix[currentRow][currentCol]}`);
  if (currentRow > numRows || currentCol > numCols || matrix[currentRow][currentCol] === CANT_VISIT_NODE_VALUE) {
    return false;
  }
  
  if ((currentRow === numRows && currentCol === numCols)
      || walkPath(matrix, currentRow + 1, currentCol, numRows, numCols, currentPath)
      || walkPath(matrix, currentRow , currentCol + 1, numRows, numCols, currentPath)) {

    currentPath.push({ row: currentRow, col: currentCol});
    return true;
  }
  
  return false;
}
