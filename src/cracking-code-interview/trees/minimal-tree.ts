import { ParentNode } from './get-successor';

interface Node {
  value?: number;
  left?: Node;
  right?: Node;
}

export function minimalTree(array: number[], parentLink = false) {
  return minimalTreeImpl(array, 0, array.length - 1, parentLink);
}

function minimalTreeImpl(array: number[], startIndex: number, endIndex: number, parentLink = false) {
  if (endIndex < startIndex || startIndex > endIndex) {
    return null;
  }
  const center = startIndex + Math.floor((endIndex - startIndex)/2)
  const value = array[center];
  const node: ParentNode = {
    value
  }
  node.left = minimalTreeImpl(array, startIndex, center - 1);
  if (parentLink && node.left) {
    (node.left as ParentNode).parent = node;
  }
  node.right = minimalTreeImpl(array, center + 1, endIndex);
  if (parentLink && node.right) {
    (node.right as ParentNode).parent = node;
  }
  return node;
} 