import { Node } from './list-of-depths';

export function reverse(node: Node) {
  const newTree: Node = {
    value: node.value,
    left: node.right,
    right: node.left
  };
  if (node.left) {
    newTree.right = reverse(node.left);
  }
  if (node.right) {
    newTree.left = reverse(node.right);
  }
  return newTree;
}