import { Node } from './list-of-depths';


export function getColumnsInOrder(node: Node) {
  if (!node) {
    return [];
  }
  const map: Map<number, number[]> = new Map();
  let minColNumber = printColumnsInOrderImpl(node, 0, map);
  
  const array: number[][] = [];
  while (map.has(minColNumber)) {
    const values = map.get(minColNumber);
    array.push(values);
    minColNumber++;
  }

  return array;
}

function printColumnsInOrderImpl(node: Node, currentCol: number, map: Map<number, number[]>): number {
  const values = map.get(currentCol) || [];
  values.push(node.value);
  map.set(currentCol, values);

  const newMinColumn = node.left ? printColumnsInOrderImpl(node.left, currentCol - 1, map) : currentCol;
  node.right && printColumnsInOrderImpl(node.right, currentCol + 1, map);

  return newMinColumn;
}