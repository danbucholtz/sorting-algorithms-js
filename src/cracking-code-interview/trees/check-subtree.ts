import { compareTrees, getChildNode } from './helpers';
import { Node } from './list-of-depths';

export function checkSubtree(source: Node, two: Node): boolean {
  return checkSubtreeImpl(source, two);
}

function checkSubtreeImpl(source: Node, two: Node) {
  const nodeTwo = getChildNode(source, two.value);
  if (!nodeTwo) {
    return false;
  }
  // check if the subtrees are the same for the two nodes
  return compareTrees(nodeTwo, two);
}