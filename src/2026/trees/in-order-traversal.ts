import type { TreeNode } from './minimal-tree';

export function inOrderTraversal(root: TreeNode): number[] {
  const list: number[] = [];
  visit(root, list);
  return list;
}

function visit(root: TreeNode, list: number[]) {
  if (root) {
    root.left && visit(root.left, list);
    list.push(root.value);
    root.right && visit(root.right, list);
  }
}
