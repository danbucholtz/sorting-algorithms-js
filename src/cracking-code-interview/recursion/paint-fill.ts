
export function paintFill(matrix: string[][], row: number, col: number, newColor: string) {
  const oldColor = matrix[row][col];
  paintFillImpl(matrix, row, col, newColor, oldColor);
  return matrix;
}

function paintFillImpl(matrix: string[][], row: number, col: number, newColor: string, oldColor: string) {
  if (row < 0 || col < 0 || row > matrix.length - 1 || col > matrix[0].length - 1 || matrix[row][col] !== oldColor) {
    return;
  }
  // okay cool, we know that the point is the old color, so make it the new color, and move in all four directions
  matrix[row][col] = newColor;
  // move up
  paintFillImpl(matrix, row - 1, col, newColor, oldColor);
  // move right
  paintFillImpl(matrix, row, col + 1, newColor, oldColor);
  // move down
  paintFillImpl(matrix, row + 1, col, newColor, oldColor);
  // move left
  paintFillImpl(matrix, row , col - 1, newColor, oldColor);

}