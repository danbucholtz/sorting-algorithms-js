import { describe, expect, it } from 'vitest';
import { BLOCKED_CELL, robotInGrid, type GridPoint } from './robot-in-a-grid';

function assertValidPath(grid: number[][], path: GridPoint[]) {
  if (path.length === 0) {
    return;
  }

  expect(path[0]).toEqual({ row: 0, col: 0 });
  expect(path[path.length - 1]).toEqual({
    row: grid.length - 1,
    col: grid[0].length - 1,
  });

  for (let i = 0; i < path.length; i++) {
    const point = path[i];
    expect(grid[point.row][point.col]).not.toBe(BLOCKED_CELL);

    if (i > 0) {
      const prev = path[i - 1];
      const rowDelta = point.row - prev.row;
      const colDelta = point.col - prev.col;
      const isOneStepDown = rowDelta === 1 && colDelta === 0;
      const isOneStepRight = rowDelta === 0 && colDelta === 1;
      expect(isOneStepDown || isOneStepRight).toBe(true);
    }
  }
}

describe(robotInGrid.name, () => {
  it('should return a valid path when no cells are blocked', () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const path = robotInGrid(grid);

    assertValidPath(grid, path);
  });

  it('should return a valid path when blocked cells exist but a route is available', () => {
    const grid = [
      [1, BLOCKED_CELL, 3],
      [4, 5, 6],
      [7, BLOCKED_CELL, 9],
    ];

    const path = robotInGrid(grid);

    assertValidPath(grid, path);
  });

  it('should return an empty path when no route exists', () => {
    const grid = [
      [1, BLOCKED_CELL, 3],
      [4, BLOCKED_CELL, 6],
      [7, BLOCKED_CELL, 9],
    ];

    const path = robotInGrid(grid);

    expect(path).toEqual([]);
  });

  it('should return an empty path when start cell is blocked', () => {
    const grid = [
      [BLOCKED_CELL, 1],
      [2, 3],
    ];

    const path = robotInGrid(grid);

    expect(path).toEqual([]);
  });
});
