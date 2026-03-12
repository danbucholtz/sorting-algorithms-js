import { describe, expect, it } from 'vitest';
import { towerOfHanoi } from './tower-of-hanoi';

describe(towerOfHanoi.name, () => {
  it('should return an empty move list for 0 disks', () => {
    const result = towerOfHanoi(0);

    expect(result).toEqual([]);
  });

  it('should return one move for 1 disk', () => {
    const result = towerOfHanoi(1);

    expect(result).toEqual([{ fromPeg: 'A', toPeg: 'C' }]);
  });

  it('should return the correct sequence for 2 disks', () => {
    const result = towerOfHanoi(2);

    expect(result).toEqual([
      { fromPeg: 'A', toPeg: 'B' },
      { fromPeg: 'A', toPeg: 'C' },
      { fromPeg: 'B', toPeg: 'C' },
    ]);
  });

  it('should return 7 moves for 3 disks and start/end correctly', () => {
    const result = towerOfHanoi(3);

    expect(result).toHaveLength(7);
    expect(result[0]).toEqual({ fromPeg: 'A', toPeg: 'C' });
    expect(result[result.length - 1]).toEqual({ fromPeg: 'A', toPeg: 'C' });
  });

  it('should support custom peg labels', () => {
    const result = towerOfHanoi(1, 'left', 'right', 'mid');

    expect(result).toEqual([{ fromPeg: 'left', toPeg: 'right' }]);
  });
});
