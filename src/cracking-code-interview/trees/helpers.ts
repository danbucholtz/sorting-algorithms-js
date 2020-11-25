
import { Node } from './list-of-depths';
import { minimalTree } from './minimal-tree';

export function arrayToTree(array: number[], parentLink = false): Node {
  array.sort((one, two) => {
    return one - two;
  });
  return minimalTree(array, parentLink);
}

export function createTree(numNodes: number): Node {
  const array = [];
  for (let i = 0; i < numNodes; i++) {
    array.push(i + 1);
  }
  return arrayToTree(array);
}

export function getChildNode(node: Node, valueToFind: number, includeSelf: boolean = true): Node {
  if (includeSelf) {
    return getChildNodeInternal(node, valueToFind);
  }
  return getChildNodeInternal(node.left, valueToFind) || getChildNodeInternal(node.right, valueToFind);
}

function getChildNodeInternal(node: Node, valueToFind: number) {
  if (!node) {
    return null;
  }
  if (node.value === valueToFind) {
    return node;
  }
  return getChildNode(node.left, valueToFind) || getChildNode(node.right, valueToFind);
}

export function findMinValueInBST(node: Node): Node {
  if (node.left) {
    return findMinValueInBST(node.left);
  }
  return node;
}

export function compareTrees(one: Node, two: Node): boolean {
  if (one && !two || two && !one) {
    return false;
  }
  if (!one && !two) {
    return true;
  }
  if (one.value !== two.value) {
    return false;
  }
  return compareTrees(one.left, two.left) && compareTrees(one.right, two.right);
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}