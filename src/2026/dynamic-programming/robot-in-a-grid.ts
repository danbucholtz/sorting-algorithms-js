export interface GridPoint {
  row: number;
  col: number;
}

export const BLOCKED_CELL = -1;

export function robotInGrid(grid: number[][]): GridPoint[] {
  const paths: GridPoint[] = [];
  if (grid.length === 0 || grid[0].length === 0) {
    return [];
  }
  const response = processMove(0, 0, grid, paths);
  if (response === State.ERROR) {
    return [];
  }
  return paths;
}

enum State {
  GOAL = 1,
  MOVING = 2,
  ERROR = 3,
}

function processMove(row: number, col: number, grid: number[][], path: GridPoint[]): State {
  console.log('calling processMove: ', row, col, path);
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;

  if (row >= gridHeight || col >= gridWidth) {
    return State.ERROR;
  }

  if (grid[row][col] === BLOCKED_CELL) {
    return State.ERROR;
  }

  if (row === gridHeight - 1 && col === gridWidth - 1) {
    path.push({
      row,
      col,
    });
    return State.GOAL;
  }

  // can it move right
  if (col + 1 < gridWidth && grid[row][col + 1] !== BLOCKED_CELL) {
    path.push({
      row,
      col: col,
    });
    // it can move right, so move right!
    const response = processMove(row, col + 1, grid, path);
    if (response === State.ERROR || response === State.GOAL) {
      return response;
    }
  } else if (row + 1 < gridHeight && grid[row + 1][col] !== BLOCKED_CELL) {
    path.push({
      row,
      col: col,
    });
    // it can move down, so move down!
    const response = processMove(row + 1, col, grid, path);
    if (response === State.ERROR || response === State.GOAL) {
      return response;
    }
  }
  {
    // it can't move, it's blocked
    return State.ERROR;
  }
}
