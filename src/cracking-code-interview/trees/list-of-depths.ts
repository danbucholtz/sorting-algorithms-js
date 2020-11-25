export interface Node {
  value?: number;
  left?: Node;
  right?: Node;
}

interface LinkedList {
  value?: number;
  next?: LinkedList;
}

export function listOfDepths(node: Node) {
  const map: Map<number, LinkedList> = new Map();
  walkTree(node, 1, map);
  return map;
}

function walkTree(node: Node, depth: number, map: Map<number, LinkedList>) {
  if (!node) {
    return;
  }
  populateNode(node.value, depth, map);
  walkTree(node.left, depth + 1, map);
  walkTree(node.right, depth + 1, map);
}

function populateNode(value: number, key: number, map: Map<number, LinkedList>) {
  const linkedList = map.get(key);
  if (!linkedList) {
    map.set(key, { value: value, next: null});
  } else {
    const newFront: LinkedList = {
      value: value,
      next: linkedList
    };
    map.set(key, newFront);
  }
}