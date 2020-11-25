
import { getChildNode } from './helpers';
import { Node } from './list-of-depths';


export function firstCommonAncestor(node: Node, one: Node, two: Node) {
  // we don't have a link to he parents, so we have to traverse down
  return firstCommonAncestorImpl(null, node, one, two);
}

function firstCommonAncestorImpl(commonAncestor: Node, node: Node, one: Node, two: Node): Node {
  const foundOne = getChildNode(node, one.value, false);
  const foundTwo = getChildNode(node, two.value, false);
  if (foundOne && foundTwo) {
    // okay, both child nodes are in the tree, try going a level deeper
    const leftResponse = firstCommonAncestorImpl(node, node.left, one, two);
    if (leftResponse != node) {
      return leftResponse;
    }
    const rightResponse = firstCommonAncestorImpl(node, node.right, one, two);
    if (rightResponse != node) {
      return rightResponse;
    }
    return node;
  }
  return commonAncestor;
}