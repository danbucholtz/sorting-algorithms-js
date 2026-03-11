import type { TreeNode } from './minimal-tree';

export function checkSubtree(source: TreeNode, subtree: TreeNode): boolean {
  // first, we must find the matching node
  const matchingNode = findSubtreeNode(source, subtree.value);
  if (!matchingNode) {
    return false;
  }
  // okay, we've got the matching node, now let's compare every node of the subtrees
  return compareNodes(matchingNode, subtree);
}

function findSubtreeNode(root: TreeNode, value: number): TreeNode | undefined {
  if (root.value === value) {
    return root;
  }
  const leftNode = root.left ? findSubtreeNode(root.left, value) : undefined;
  if (leftNode) {
    return leftNode;
  }
  const rightNode = root.right ? findSubtreeNode(root.right, value) : undefined;
  if (rightNode) {
    return rightNode;
  }
  return undefined;
}

function compareNodes(nodeOne: TreeNode, nodeTwo: TreeNode): boolean {
  if (nodeOne.value !== nodeTwo.value) {
    return false;
  }

  if ((nodeOne.left === undefined) !== (nodeTwo.left === undefined)) {
    return false;
  }

  if (nodeOne.left && nodeTwo.left && !compareNodes(nodeOne.left, nodeTwo.left)) {
    return false;
  }

  if ((nodeOne.right === undefined) !== (nodeTwo.right === undefined)) {
    return false;
  }

  if (nodeOne.right && nodeTwo.right && !compareNodes(nodeOne.right!, nodeTwo.right!)) {
    return false;
  }

  return true;
}
