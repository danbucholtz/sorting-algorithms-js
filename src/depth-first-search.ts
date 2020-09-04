import { Node } from './graph-node';

export function depthFirstSearch(nodeOne: Node, nodeTwo: Node) {
  const visited: Set<number> = new Set();
  return depthFirstSearchInternal(nodeOne, nodeTwo, visited);
}

export function depthFirstSearchInternal(nodeOne: Node, nodeTwo: Node, visited: Set<number>) {
  if (visited.has(nodeOne.id)) {
    return false;
  }
  visited.add(nodeOne.id);
  if (nodeOne.id === nodeTwo.id) {
    return true;
  }

  for (const adjacentNode of nodeOne.connectedNodes) {
    if (depthFirstSearchInternal(adjacentNode, nodeTwo, visited)) {
      return true;
    }
  }
  return false;
}