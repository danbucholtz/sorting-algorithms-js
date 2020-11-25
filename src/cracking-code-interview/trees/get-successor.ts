import { findMinValueInBST, getChildNode } from './helpers';
import { Node } from './list-of-depths';

export interface ParentNode extends Node {
  parent?: Node;
}

export function getSuccessor(node: ParentNode, value: number): Node {
  const nodeWithValue = getChildNode(node, value);
  if (!nodeWithValue) {
    return null;
  }
  if (nodeWithValue.right) {
    
    return findMinValueInBST(nodeWithValue.right);
  }
  return findFirstParentWithBiggerValue((nodeWithValue as ParentNode).parent, value);
}

function findFirstParentWithBiggerValue(node: ParentNode, value: number): Node {
  if (!node) {
    return null;
  }
  if (node.value > value) {
    return node;
  }
  return findFirstParentWithBiggerValue(node.parent, value);
}