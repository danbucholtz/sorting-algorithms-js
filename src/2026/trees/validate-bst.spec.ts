import { describe, expect, it } from 'vitest';
import type { TreeNode } from './minimal-tree';
import { minimalTree } from './minimal-tree';
import { validateBst } from './validate-bst';

describe(validateBst.name, () => {
  it('should return true for a single-node tree', () => {
    const root: TreeNode = { value: 10 };

    const result = validateBst(root);

    expect(result).toBe(true);
  });

  it('should return true for a valid BST', () => {
    const root = minimalTree([1, 2, 3, 4, 5, 6, 7]) as TreeNode;

    const result = validateBst(root);

    expect(result).toBe(true);
  });

  it('should return false when a left child is greater than its parent', () => {
    const root: TreeNode = {
      value: 10,
      left: {
        value: 12,
      },
      right: {
        value: 15,
      },
    };

    const result = validateBst(root);

    expect(result).toBe(false);
  });

  it('should return false when a deep node violates BST ordering constraints', () => {
    const root: TreeNode = {
      value: 10,
      left: {
        value: 5,
        left: { value: 2 },
        right: { value: 12 },
      },
      right: {
        value: 20,
      },
    };

    const result = validateBst(root);

    expect(result).toBe(false);
  });

  it('should return false when duplicate values appear in BST positions', () => {
    const root: TreeNode = {
      value: 10,
      left: { value: 5 },
      right: { value: 10 },
    };

    const result = validateBst(root);

    expect(result).toBe(false);
  });
});
