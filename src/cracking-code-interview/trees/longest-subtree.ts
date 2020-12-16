import { Node } from './list-of-depths';


export function largestSubtree(node: Node) {
  if (!node) {
    return 0;
  }
  const state = {globalMaxTreeLength: 0};
  largestSubtreeImpl(node, 0, state);
  return state.globalMaxTreeLength;
}

function largestSubtreeImpl(node: Node, currentDepth: number, state: { globalMaxTreeLength: number}): number {
  const leftDepth = node.left ? largestSubtreeImpl(node.left, currentDepth + 1, state) : currentDepth;
  const rightDepth = node.right ? largestSubtreeImpl(node.right, currentDepth + 1, state) : currentDepth;

  const localMaxTreeLength = leftDepth + rightDepth - (currentDepth * 2);
  if (localMaxTreeLength > state.globalMaxTreeLength) {
    state.globalMaxTreeLength = localMaxTreeLength;
  }

  return leftDepth > rightDepth ? leftDepth : rightDepth;

}