import { SinglelyLinkedList } from './interfaces';

export function sumListsBackwards(one: SinglelyLinkedList, two: SinglelyLinkedList) {
  return sumListsBackwardsImpl(one, two, 0);
}

function sumListsBackwardsImpl(one: SinglelyLinkedList, two: SinglelyLinkedList, carry: number) {
  if (!one && !two && carry === 0) {
    return null;
  }
  let value = carry;
  if (one?.value) {
    value += one.value;
  }
  if (two?.value) {
    value += two.value;
  }
  const carryOver = value >= 10 ? 1 : 0;
  const cellValue = value % 10;
  const node: SinglelyLinkedList = {
    value: cellValue
  };
  if (one?.next || two?.next || carryOver > 0) {
     node.next = sumListsBackwardsImpl(one?.next, two?.next, carryOver);
  }
  return node;
}