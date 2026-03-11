import { describe, expect, it } from 'vitest';
import type { TreeNode } from './minimal-tree';
import { inOrderTraversal } from './in-order-traversal';

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

describe(inOrderTraversal.name, () => {
  it('should return left-root-right order', () => {
    const result = inOrderTraversal(buildSampleTree());

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should return an empty array for an empty tree', () => {
    const result = inOrderTraversal(undefined);

    expect(result).toEqual([]);
  });
});
