import type { TreeNode } from './minimal-tree';

export function preOrderTraversal(root: TreeNode): number[] {
  const list: number[] = [];
  visit(root, list);
  return list;
}

function visit(root: TreeNode, list: number[]) {
  if (root) {
    list.push(root.value);
    root.left && visit(root.left, list);
    root.right && visit(root.right, list);
  }
}
