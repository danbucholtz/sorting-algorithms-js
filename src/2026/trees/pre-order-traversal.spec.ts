import { describe, expect, it } from 'vitest';
import type { TreeNode } from './minimal-tree';
import { preOrderTraversal } from './pre-order-traversal';

function buildSampleTree(): TreeNode {
  return {
    value: 4,
    left: {
      value: 2,
      left: { value: 1 },
      right: { value: 3 },
    },
    right: {
      value: 6,
      left: { value: 5 },
      right: { value: 7 },
    },
  };
}

describe(preOrderTraversal.name, () => {
  it('should return root-left-right order', () => {
    const result = preOrderTraversal(buildSampleTree());

    expect(result).toEqual([4, 2, 1, 3, 6, 5, 7]);
  });

  it('should return an empty array for an empty tree', () => {
    const result = preOrderTraversal(undefined);

    expect(result).toEqual([]);
  });
});
