import { Node } from './list-of-depths';


export function pathsWithSum(node: Node, sum: number) {
  return pathWithSumsImpl(node, sum, 0);
}

function pathWithSumsImpl(node: Node, sum: number, currentSum: number): number {
  currentSum += node.value;
  if (!node.left && !node.right) {
    if (currentSum === sum) {
      return 1;
    }
    return 0;
  }

  const leftValue = node.left ? pathWithSumsImpl(node.left, sum, currentSum) : 0;
  const rightValue = node.right ? pathWithSumsImpl(node.right, sum, currentSum) : 0;
  return leftValue + rightValue;
}