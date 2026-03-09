import { SinglelyLinkedList } from './interfaces';

export function sumListsBackwards(one: SinglelyLinkedList, two: SinglelyLinkedList) {
  let carryOverValue = 0;
  let previousNode: SinglelyLinkedList | undefined = undefined;
  let startOfNewList: SinglelyLinkedList | undefined = undefined;
  while (one || two) {
    const oneValue = one?.value ?? 0;
    const twoValue = two?.value ?? 0;
    const totalValue = oneValue + twoValue + carryOverValue;
    let nodeValue = 0;
    if (totalValue >= 10) {
      carryOverValue = 1;
      nodeValue = totalValue - 10;
    } else {
      nodeValue = totalValue;
      carryOverValue = 0;
    }

    one = one.next!;
    two = two.next!;

    // we need to make a new node, and have the previous node point to it
    const tempNode = {
      value: nodeValue,
    };

    if (!previousNode) {
      previousNode = tempNode;
      startOfNewList = tempNode;
    } else {
      previousNode.next = tempNode;
    }
    previousNode = tempNode;
  }

  // okay, if there is a carry over, we need to add a new node for that
  if (carryOverValue === 1) {
    const tempNode = {
      value: 1,
    };
    previousNode!.next = tempNode;
    previousNode = tempNode;
  }

  return startOfNewList;
}

// 7 -> 1 -> 6
// 5 -> 9 -> 2

// oneValue = 6
// twoValue = 2
// carryOverValue = 1
// totalValue = 9
// nodeValue = 9
// previous -> 9

// 2 -> 1 -> 9
