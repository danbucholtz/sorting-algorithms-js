
// https://www.geeksforgeeks.org/find-maximum-path-sum-two-leaves-binary-tree/
import { Node } from './list-of-depths';

export function sumMaxPath(node: Node) {
  return sumMaxPathImpl(node, { sum: 0});
}

function sumMaxPathImpl(node: Node, state: { sum: number}) {

  if (!node) {
    return 0;
  }

  if (!node.left && !node.right) {
    return node.value;
  }

  const leftResult = sumMaxPathImpl(node.left, state);
  const rightResult = sumMaxPathImpl(node.right, state);

  if (node.left && node.right) {
    const sum = leftResult + rightResult + node.value;
    if (sum > state.sum) {
      state.sum = sum;
    }

    if (leftResult > rightResult) {
      return leftResult + node.value;
    }
    return rightResult + node.value;
  }

  if (!node.left) {
    return rightResult + node.value;
  }
  return leftResult + node.value;
}