import { describe, expect, it } from 'vitest';
import type { TreeNode } from './minimal-tree';
import { minimalTree } from './minimal-tree';
import { checkBalanced } from './check-balanced';

describe(checkBalanced.name, () => {
  it('should return true for a single-node tree', () => {
    const root: TreeNode = { value: 1 };

    const result = checkBalanced(root);

    expect(result).toBe(true);
  });

  it('should return true for a balanced tree', () => {
    const root = minimalTree([1, 2, 3, 4, 5, 6, 7]);

    const result = checkBalanced(root);

    expect(result).toBe(true);
  });

  it('should return false for a left-heavy unbalanced tree', () => {
    const root: TreeNode = {
      value: 10,
      left: {
        value: 9,
        left: {
          value: 8,
          left: {
            value: 7,
          },
        },
      },
    };

    const result = checkBalanced(root);

    expect(result).toBe(false);
  });

  it('should return false when a deep subtree is unbalanced even if root looks close', () => {
    const root: TreeNode = {
      value: 5,
      left: {
        value: 3,
        left: {
          value: 2,
          left: {
            value: 1,
          },
        },
      },
      right: {
        value: 8,
      },
    };

    const result = checkBalanced(root);

    expect(result).toBe(false);
  });
});
