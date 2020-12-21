import { Node } from './list-of-depths';

export interface NodeData {
  depth: number;
  value: number;
}
export function bottomView(node: Node) {
  if (!node) {
    return [];
  }
  const map: Map<number, NodeData> = new Map();
  const minColumnNumber = bottomViewImpl(node, 0, 0, map);
  const array: number[] = [];
  for (let i = minColumnNumber; i < Number.MAX_SAFE_INTEGER; i++) {
    const data = map.get(i);
    if (data) {
      array.push(data.value);
    } else {
      break;
    }
  }
  return array;
}

function bottomViewImpl(node: Node, currentColumn: number, currentDepth: number, map: Map<number, NodeData>): number {
  let data = map.get(currentColumn);
  if (!data) {
    data = {
      depth: currentDepth,
      value: node.value
    };
  } else if (currentDepth > data.depth) {
    data.depth = currentDepth;
    data.value = node.value;
  }
  map.set(currentColumn, data);

  const minLeftColumn = node.left ? bottomViewImpl(node.left, currentColumn - 1, currentDepth + 1, map) : currentColumn;
  node.right && bottomViewImpl(node.right, currentColumn + 1, currentDepth + 1, map);

  // return the min column
  if (minLeftColumn < currentColumn) {
    return minLeftColumn;
  }
  return currentColumn;
}