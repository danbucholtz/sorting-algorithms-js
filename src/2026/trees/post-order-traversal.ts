import type { TreeNode } from './minimal-tree';

export function postOrderTraversal(root: TreeNode): number[] {
  const list: number[] = [];
  visit(root, list);
  return list;
}

function visit(root: TreeNode, list: number[]) {
  if (root) {
    root.left && visit(root.left, list);
    root.right && visit(root.right, list);
    list.push(root.value);
  }
}
