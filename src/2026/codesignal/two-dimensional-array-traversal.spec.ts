import { describe, expect, it } from 'vitest';
import { solution } from './two-dimensional-array-traversal';

describe(solution.name, () => {
  it('should return 0 for prompt example where width is 3', () => {
    const field = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
    ];
    const figure = [
      [0, 0, 1],
      [0, 1, 1],
      [0, 0, 1],
    ];

    const result = solution(field, figure);

    expect(result).toBe(0);
  });

  it('should return 2 for the second prompt example', () => {
    const field = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
    ];
    const figure = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 0, 1],
    ];

    const result = solution(field, figure);

    expect(result).toBe(2);
  });

  it('should return -1 for the third prompt example', () => {
    const field = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 1, 0, 1],
    ];
    const figure = [
      [1, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
    ];

    const result = solution(field, figure);

    expect(result).toBe(-1);
  });

  it.skip('should return a valid index when multiple dropping positions work', () => {
    const field = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
    ];
    const figure = [
      [0, 0, 0],
      [0, 0, 0],
      [1, 0, 0],
    ];

    const result = solution(field, figure);

    // Width 4 with a 3x3 figure gives valid drop columns 0 and 1.
    expect([0, 1]).toContain(result);
  });

  it('should return -1 when field is narrower than figure width', () => {
    const field = [
      [0, 0],
      [0, 0],
      [0, 0],
    ];
    const figure = [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ];

    const result = solution(field, figure);

    expect(result).toBe(-1);
  });
});
