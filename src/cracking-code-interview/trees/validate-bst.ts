import { Node } from './list-of-depths';

export function isBst(node: Node) {
  return isBstImpl(node)
}

function isBstImpl(node: Node) {
  if (!node) {
    return false;
  }
  const leftValue = node.left ? node.left.value : Number.MIN_SAFE_INTEGER;
  if (leftValue > node.value) {
    return false;
  }
  const rightValue = node.right ? node.right.value : Number.MAX_SAFE_INTEGER;
  if (node.value >= rightValue) {
    return false;
  }
  if (node.left) {
    const leftResult = isBstImpl(node.left);
    if (leftResult === false) {
      return false;
    }
  }
  if (node.right) {
    const rightResult = isBstImpl(node.right);
    if (rightResult === false) {
      return false;
    }
  }
  return true;
}

