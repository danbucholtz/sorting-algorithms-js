import { Box, stackOfBoxes } from './boxes';

describe(stackOfBoxes.name, () => {
  it('should return 6 for a simple stack of three boxes', () => {
    const boxes: Box[] = [
      {depth: 1, height: 1, width: 1},
      {depth: 3, height: 3, width: 3},
      {depth: 2, height: 2, width: 2}
    ];
    const result = stackOfBoxes(boxes);
    expect(result).toBe(6);
  });

  it('should return the height for a simple stack of one box', () => {
    const boxes: Box[] = [
      {depth: 1, height: 10, width: 1},
    ];
    const result = stackOfBoxes(boxes);
    expect(result).toBe(10);
  });

  it('should return the biggest height for an unstackable set of boxes', () => {
    const boxes: Box[] = [
      {depth: 1, height: 1, width: 1},
      {depth: 1, height: 3, width: 1},
      {depth: 1, height: 2, width: 1}
    ];
    const result = stackOfBoxes(boxes);
    expect(result).toBe(3);
  });

  it('should return the biggest stackable set from the group of boxes', () => {
    const boxes: Box[] = [
      {depth: 1, height: 1, width: 1},
      {depth: 1, height: 1, width: 1},
      {depth: 2, height: 2, width: 2},
      {depth: 2, height: 2, width: 2},
      {depth: 3, height: 3, width: 3}
    ];
    const result = stackOfBoxes(boxes);
    expect(result).toBe(5);
  });
});