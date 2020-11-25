import { Node } from './list-of-depths';


export function checkBalanced(node: Node) {
  const leftDepth = checkBalancedImpl(node.left, 0);
  const rightDepth = checkBalancedImpl(node.right, 0);
  const diff = Math.abs(leftDepth - rightDepth);
  return diff <= 1;
}

function checkBalancedImpl(node: Node, currentDepth: number): number {
  if (!node) {
    return currentDepth;
  }
  const leftDepth = node.left ? checkBalancedImpl(node.left, currentDepth + 1) : currentDepth;
  const rightDepth = node.right ? checkBalancedImpl(node.right, currentDepth + 1) : currentDepth;
  const maxDepth = Math.max(leftDepth, rightDepth);
  return maxDepth;
}