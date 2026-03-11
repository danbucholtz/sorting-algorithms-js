import { describe, expect, it } from 'vitest';
import type { TreeNode } from './minimal-tree';
import { pathsWithSum } from './paths-with-sum';

describe(pathsWithSum.name, () => {
  it('should return the CTCI canonical example result', () => {
    //            10
    //          /    \
    //         5     -3
    //       /  \      \
    //      3    2      11
    //     / \    \
    //    3  -2    1
    const root: TreeNode = {
      value: 10,
      left: {
        value: 5,
        left: {
          value: 3,
          left: { value: 3 },
          right: { value: -2 },
        },
        right: {
          value: 2,
          right: { value: 1 },
        },
      },
      right: {
        value: -3,
        right: { value: 11 },
      },
    };

    const result = pathsWithSum(root, 8);

    expect(result).toBe(3);
  });

  it('should count paths that start below the root', () => {
    const root: TreeNode = {
      value: 1,
      left: {
        value: 2,
        left: { value: 3 },
      },
      right: {
        value: 3,
      },
    };

    // valid downward paths summing to 3:
    // [1,2], [3] (left leaf), [3] (right leaf)
    const result = pathsWithSum(root, 3);

    expect(result).toBe(3);
  });

  it('should handle negative values', () => {
    const root: TreeNode = {
      value: -2,
      left: { value: -3 },
      right: {
        value: 4,
        left: { value: -2 },
      },
    };

    // valid downward paths summing to -5:
    // [-2, -3]
    const result = pathsWithSum(root, -5);

    expect(result).toBe(1);
  });
});
