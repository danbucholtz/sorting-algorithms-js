export interface ParentTreeNode {
  value: number;
  left?: ParentTreeNode;
  right?: ParentTreeNode;
  parent?: ParentTreeNode;
}

export function successor(node?: ParentTreeNode): ParentTreeNode | undefined {
  if (!node) {
    return undefined;
  }
  // if the node has a right node, we will just immediately go and find the left-most node in the right subtree
  if (node.right) {
    return findLeftMostNode(node.right);
  }
  // okay, so now we must find where the node is a parent's left subtree now
  let parent = node.parent;
  while (parent && parent.left !== node) {
    node = node.parent as ParentTreeNode;
    parent = parent.parent;
  }
  return parent;
}

function findLeftMostNode(node: ParentTreeNode): ParentTreeNode | undefined {
  while (node.left) {
    node = node.left;
  }
  return node;
}
