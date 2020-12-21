import { Node } from './list-of-depths';

export function lowestAncestor(root: Node, one: Node, two: Node) {
  return lowestAncestorFast(root, one, two);
}

function lowestAncestorFast(root: Node, one: Node, two: Node): Node {
  if (!root) {
    return null;
  }

  if (one.value < root.value && two.value < root.value) {
    return lowestAncestorFast(root.left, one, two);
  }
  if (one.value > root.value && two.value > root.value) {
    return lowestAncestorFast(root.right, one, two);
  }
  return root;
}
