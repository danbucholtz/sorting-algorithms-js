import { SinglelyLinkedList } from './interfaces';

export function sumListsForward(one: SinglelyLinkedList, two: SinglelyLinkedList) {
  const stackOne = [];
  const stackTwo = [];
  while (one || two) {
    if (one) {
      stackOne.push(one.value);
      one = one.next!;
    }
    if (two) {
      stackTwo.push(two.value);
      two = two.next!;
    }
  }

  console.log('stackOne: ', stackOne);
  console.log('stackTwo: ', stackTwo);

  let carryOver = 0;
  let previousNode: SinglelyLinkedList | undefined = undefined;
  let startOfNewList: SinglelyLinkedList | undefined = undefined;
  while (stackOne.length > 0 || stackTwo.length > 0) {
    let valueOne = 0;
    let valueTwo = 0;
    if (stackOne.length > 0) {
      valueOne = stackOne.pop()!;
    }
    if (stackTwo.length > 0) {
      valueTwo = stackTwo.pop()!;
    }

    let localValue = carryOver + valueOne + valueTwo;
    if (localValue > 10) {
      carryOver = 1;
      localValue = localValue - 10;
    } else {
      carryOver = 0;
    }

    const tempNode = {
      value: localValue,
    };

    if (!previousNode) {
      previousNode = tempNode;
      startOfNewList = tempNode;
    } else {
      previousNode.next = tempNode;
    }
    previousNode = tempNode;
  }

  if (carryOver === 1) {
    const tempNode = {
      value: 1,
    };
    previousNode!.next = tempNode;
    previousNode = tempNode;
  }

  return startOfNewList;
}

// 7, 1, 6
// 5, 9, 2
