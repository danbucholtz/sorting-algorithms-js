import { describe, expect, it } from 'vitest';
import type { TreeNode } from './minimal-tree';
import { postOrderTraversal } from './post-order-traversal';

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

describe(postOrderTraversal.name, () => {
  it('should return left-right-root order', () => {
    const result = postOrderTraversal(buildSampleTree());

    expect(result).toEqual([1, 3, 2, 5, 7, 6, 4]);
  });

  it('should return an empty array for an empty tree', () => {
    const result = postOrderTraversal(undefined);

    expect(result).toEqual([]);
  });
});
