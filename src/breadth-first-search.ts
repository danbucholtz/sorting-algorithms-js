import { Node } from './graph-node';

export function breadthFirstSearch(nodeOne: Node, nodeTwo: Node) {
  const visited: Set<number> = new Set();
  const nextToVisit: Set<Node> = new Set();
  nextToVisit.add(nodeOne);
  while (nextToVisit.size > 0) {
    const node = getElementFromSet(nextToVisit);
    nextToVisit.delete(node);
    if (node.value === nodeTwo.value) {
      return true;
    }
    if (visited.has(node.value)) {
      continue;
    }

    visited.add(node.value);

    for (const child of node.connectedNodes) {
      nextToVisit.add(child);
    }
  }
  return false;
}

export function getElementFromSet(set: Set<Node>) {
  let node: Node = null;
  for (const item of set) {
    node = item;
    break;
  }
  return node;
}