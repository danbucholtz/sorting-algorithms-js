
import { Node } from './list-of-depths';


export function maxDepth(node: Node) {
  if (!node) {
    return 0;
  }
  return maxDepthImpl(node, 0);
}

function maxDepthImpl(node: Node, depth: number): number {
  const leftDepth = node.left ? maxDepthImpl(node.left, depth + 1) : depth;
  const rightDepth = node.right ? maxDepthImpl(node.right, depth + 1) : depth;

  return leftDepth > rightDepth ? leftDepth : rightDepth;
}