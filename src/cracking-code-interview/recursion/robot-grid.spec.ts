import { CANT_VISIT_NODE_VALUE, robotGrid } from './robot-grid';

describe(robotGrid.name, () => {
  it('should return a path to the end when there is no invalid spaces', () => {
    const matrix: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const path = robotGrid(matrix);
    const lastPoint = path[path.length - 1];
    expect(lastPoint.row).toBe(2);
    expect(lastPoint.col).toBe(2);
  });

  it('should return a path to the end when there are invalid spaces', () => {
    const matrix: number[][] = [
      [1, CANT_VISIT_NODE_VALUE, 3],
      [4, 5, 6],
      [7, CANT_VISIT_NODE_VALUE, 9]
    ];
    const path = robotGrid(matrix);
    const lastPoint = path[path.length - 1];
    expect(lastPoint.row).toBe(2);
    expect(lastPoint.col).toBe(2);
  });

  it('should return an empty array when there isnt a path', () => {
    const matrix: number[][] = [
      [1, CANT_VISIT_NODE_VALUE, 3],
      [4, CANT_VISIT_NODE_VALUE, 6],
      [7, CANT_VISIT_NODE_VALUE, 9]
    ];
    const path = robotGrid(matrix);
    expect(path.length).toBe(0);
  });


});