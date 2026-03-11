import type { TreeNode } from './minimal-tree';

export interface DepthListNode {
  value: number;
  next?: DepthListNode;
}

export function listOfDepths(root: TreeNode): DepthListNode[] {
  const list: DepthListNode[] = [];
  walkTree(root, 0, list);
  return list;
}

function walkTree(root: TreeNode | undefined, layer: number, list: DepthListNode[]) {
  if (!root) {
    return;
  }
  const existingDepthNode = list[layer];
  const newDepthNode: DepthListNode = {
    value: root.value,
    next: existingDepthNode,
  };
  list[layer] = newDepthNode;

  walkTree(root.left, layer + 1, list);
  walkTree(root.right, layer + 1, list);
}
