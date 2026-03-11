import { describe, expect, it } from 'vitest';
import { minimalTree, type TreeNode } from './minimal-tree';

function inOrderTraversal(root: TreeNode | undefined): number[] {
  if (!root) {
    return [];
  }
  return [...inOrderTraversal(root.left), root.value, ...inOrderTraversal(root.right)];
}

function height(root: TreeNode | undefined): number {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}

function isHeightBalanced(root: TreeNode | undefined): boolean {
  if (!root) {
    return true;
  }
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }
  return isHeightBalanced(root.left) && isHeightBalanced(root.right);
}

describe(minimalTree.name, () => {
  it('should return undefined for an empty array', () => {
    const result = minimalTree([]);

    expect(result).toBeUndefined();
  });

  it('should build a minimal-height tree for an odd number of values', () => {
    const input = [1, 2, 3, 4, 5, 6, 7];

    const result = minimalTree(input);

    expect(result?.value).toBe(4);
    expect(inOrderTraversal(result)).toEqual(input);
    expect(isHeightBalanced(result)).toBe(true);
  });

  it('should build a minimal-height tree for an even number of values', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8];

    const result = minimalTree(input);

    expect(inOrderTraversal(result)).toEqual(input);
    expect(isHeightBalanced(result)).toBe(true);
  });

  it('should handle a single value', () => {
    const result = minimalTree([42]);

    expect(result).toEqual({
      value: 42,
      left: undefined,
      right: undefined,
    });
  });
});
