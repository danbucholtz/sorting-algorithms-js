import { SinglelyLinkedList } from './interfaces';

export function sumListsForwards(one: SinglelyLinkedList, two: SinglelyLinkedList) {
  const response = sumListsForwardsImpl(one, two);
  if (response.carry > 0) {
    const node: SinglelyLinkedList = {
      value: response.carry,
      next: response.node
    };
    return node;
  }
  return response.node.next;
}

function sumListsForwardsImpl(one: SinglelyLinkedList, two: SinglelyLinkedList): { node: SinglelyLinkedList, carry: number } {
  if (!one && !two) {
    return {
      carry: 0,
      node: null,
    };
  }
  const response = sumListsForwardsImpl(one?.next, two?.next);
  let value = response.carry;
  if (one?.value) {
    value += one.value;
  }
  if (two?.value) {
    value += two.value;
  }
  const cellValue = Math.floor(value % 10);
  const carry = Math.floor(value / 10);
  const node: SinglelyLinkedList = {
    value: cellValue,
    next: response.node
  };
  return {
    carry,
    node
  };
}
