import { describe, expect, it } from 'vitest';
import type { TreeNode } from './minimal-tree';
import { firstCommonAncestor } from './first-common-ancestor';

interface SampleTree {
  root: TreeNode;
  nodesByValue: Map<number, TreeNode>;
}

function buildSampleTree(): SampleTree {
  //         20
  //       /    \
  //     10      30
  //    /  \    /  \
  //   5   15  25  35
  const node5: TreeNode = { value: 5 };
  const node15: TreeNode = { value: 15 };
  const node25: TreeNode = { value: 25 };
  const node35: TreeNode = { value: 35 };
  const node10: TreeNode = { value: 10, left: node5, right: node15 };
  const node30: TreeNode = { value: 30, left: node25, right: node35 };
  const root: TreeNode = { value: 20, left: node10, right: node30 };

  return {
    root,
    nodesByValue: new Map([
      [5, node5],
      [10, node10],
      [15, node15],
      [20, root],
      [25, node25],
      [30, node30],
      [35, node35],
    ]),
  };
}

describe(firstCommonAncestor.name, () => {
  it('should find the ancestor when nodes are in different subtrees', () => {
    const { root, nodesByValue } = buildSampleTree();

    const result = firstCommonAncestor(root, nodesByValue.get(5)!, nodesByValue.get(35)!);

    expect(result?.value).toBe(20);
  });

  it('should find the ancestor when nodes are in the same subtree', () => {
    const { root, nodesByValue } = buildSampleTree();

    const result = firstCommonAncestor(root, nodesByValue.get(5)!, nodesByValue.get(15)!);

    expect(result?.value).toBe(10);
  });

  it('should return the ancestor node itself when one node is ancestor of the other', () => {
    const { root, nodesByValue } = buildSampleTree();

    const result = firstCommonAncestor(root, nodesByValue.get(10)!, nodesByValue.get(15)!);

    expect(result?.value).toBe(10);
  });

  it('should return undefined when one node is not in the tree', () => {
    const { root, nodesByValue } = buildSampleTree();
    const externalNode: TreeNode = { value: 999 };

    const result = firstCommonAncestor(root, nodesByValue.get(5)!, externalNode);

    expect(result).toBeUndefined();
  });
});
