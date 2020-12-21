import { notStrictEqual } from 'assert';
import { Node } from './list-of-depths';


export function verticalOrder(node: Node) {
  if (!node) {
    return [];
  }
  const map: Map<number, number[]> = new Map();
  const state = { minColumn: 0}
  verticalOrderImpl(node, 0, state, map);

  const array: number[] = [];
  for (let i = state.minColumn; i < Number.MAX_SAFE_INTEGER; i++) {
    const list = map.get(i);
    if (!list) {
      break;
    }
    for (const value of list) {
      array.push(value);
    }
  }
  return array;
}

function verticalOrderImpl(node: Node, columnNumber: number, state: { minColumn: number}, map: Map<number, number[]>) {

  const list = map.get(columnNumber) || [];
  list.push(node.value);
  map.set(columnNumber, list);

  if ( columnNumber < state.minColumn) {
    state.minColumn = columnNumber;
  }

  node.left && verticalOrderImpl(node.left, columnNumber - 1, state, map);

  node.right && verticalOrderImpl(node.right, columnNumber + 1, state, map);

}