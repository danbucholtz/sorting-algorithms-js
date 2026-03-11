import { describe, expect, it } from 'vitest';
import type { TreeNode } from './minimal-tree';
import { checkSubtree } from './check-subtree';

function buildSourceTree(): TreeNode {
  return {
    value: 8,
    left: {
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
    },
    right: {
      value: 12,
      left: { value: 10 },
      right: { value: 14 },
    },
  };
}

describe(checkSubtree.name, () => {
  it('should return true when subtree is the source root', () => {
    const source = buildSourceTree();

    const result = checkSubtree(source, source);

    expect(result).toBe(true);
  });

  it('should return true when subtree exists in the left branch', () => {
    const source = buildSourceTree();
    const subtree = source.left;

    const result = checkSubtree(source, subtree!);

    expect(result).toBe(true);
  });

  it('should return true for a matching leaf subtree', () => {
    const source = buildSourceTree();
    const subtree: TreeNode = { value: 7 };

    const result = checkSubtree(source, subtree);

    expect(result).toBe(true);
  });

  it('should return false when shape differs even if root values match', () => {
    const source = buildSourceTree();
    const subtree: TreeNode = {
      value: 6,
      left: { value: 5 },
    };

    const result = checkSubtree(source, subtree);

    expect(result).toBe(false);
  });

  it('should return false when subtree root value does not exist in source', () => {
    const source = buildSourceTree();
    const subtree: TreeNode = { value: 999 };

    const result = checkSubtree(source, subtree);

    expect(result).toBe(false);
  });
});
