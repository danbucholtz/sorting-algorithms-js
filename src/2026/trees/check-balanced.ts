import type { TreeNode } from './minimal-tree';

export function checkBalanced(root: TreeNode): boolean {
  const currentDepth = 1;
  const leftDepth = root.left ? walkTree(root.left, currentDepth) : currentDepth;
  const rightDepth = root.right ? walkTree(root.right, currentDepth) : currentDepth;
  return Math.abs(rightDepth - leftDepth) <= 1;
}

function walkTree(root: TreeNode, currentDepth: number): number {
  const leftDepth = root.left ? walkTree(root.left, currentDepth + 1) : currentDepth;
  const rightDepth = root.right ? walkTree(root.right, currentDepth + 1) : currentDepth;
  const maxDepth = Math.max(leftDepth, rightDepth);
  return maxDepth;
}
