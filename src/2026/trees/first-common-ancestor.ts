import type { TreeNode } from './minimal-tree';

export function firstCommonAncestor(
  root: TreeNode,
  nodeOne: TreeNode,
  nodeTwo: TreeNode,
): TreeNode | undefined {
  return firstCommonAncestorImpl(root, nodeOne, nodeTwo);
}

function firstCommonAncestorImpl(
  root: TreeNode,
  nodeOne: TreeNode,
  nodeTwo: TreeNode,
): TreeNode | undefined {
  if (isChild(root, nodeOne) && isChild(root, nodeTwo)) {
    // it's an ancestor, but maybe not the lowest
    const leftResult = root.left
      ? isChild(root.left, nodeOne) && isChild(root.left, nodeTwo)
      : false;
    if (leftResult) {
      // okay, they're both in the left tree, so call this function again and keep going lower
      return firstCommonAncestorImpl(root.left!, nodeOne, nodeTwo);
    }

    const rightResult = root.right
      ? isChild(root.right, nodeOne) && isChild(root.right, nodeTwo)
      : false;
    if (rightResult) {
      // okay, they're both in the right tree, so call this function again and keep going lower
      return firstCommonAncestorImpl(root.right!, nodeOne, nodeTwo);
    }

    // okay, both nodes are in either the left or the right subtrees
    // so root is the lowest comment ancessor
    return root;
  }
  // okay, we will only get this condition if there isn't a common ancestor
  return undefined;
}

function isChild(root: TreeNode, otherNode: TreeNode): boolean {
  if (root === otherNode) {
    return true;
  }
  const leftChild = root.left ? isChild(root.left, otherNode) : false;
  const rightChild = root.right ? isChild(root.right, otherNode) : false;
  return leftChild || rightChild;
}
