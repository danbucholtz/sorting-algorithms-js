import { Node } from './list-of-depths';
import { NodeData } from './bottom-view';

export function topView(node: Node) {
  if (!node) {
    return [];
  }
  const map: Map<number, NodeData> = new Map();
  // populate the map
  const minColumnNumber = topViewImpl(node, 0, 0, 0, map);
  //console.log('minColumnNumber: ', minColumnNumber);
  const array: number[] = [];
  for (let i = minColumnNumber; i < map.size; i++) {
    const data = map.get(i);
    if (!data) {
      break;
    }
    array.push(data.value);
  }
  return array;
}

function topViewImpl(node: Node, currentColumn: number, currentDepth: number, minColumn: number,  map: Map<number, NodeData>): number {
  
  let data = map.get(currentColumn);
  if (!data || currentDepth < data.depth) {
    data = {
      depth: currentDepth,
      value: node.value
    };
    map.set(currentColumn, data);
  }

  const newMinColumnNumber = node.left ? topViewImpl(node.left, currentColumn - 1, currentDepth + 1, minColumn, map) : currentColumn;
  node.right && topViewImpl(node.right, currentColumn + 1, currentDepth + 1, minColumn, map);

  if (newMinColumnNumber < minColumn) {
    return newMinColumnNumber;
  }

  return minColumn;
}