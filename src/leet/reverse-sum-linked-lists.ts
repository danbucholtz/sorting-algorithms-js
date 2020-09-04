/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.



Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/


export interface LinkedListNode {
  value: number;
  next: LinkedListNode;
}

export function reverseAndSumLinkedLists(listOne: LinkedListNode, listTwo: LinkedListNode) {
  const valueOne = reverseListAndConvertToNumber(listOne);
  const valueTwo = reverseListAndConvertToNumber(listTwo);
  return valueOne + valueTwo;
}

export function reverseListAndConvertToNumber(list: LinkedListNode) {
  const array = [];
  while (list) {
    throwIfInvalidValue(list.value);
    array.unshift(list.value);
    list = list.next;
  }
  if (array.length === 0) {
    throw new Error(`Invalid input, no entries found`);
  }
  const stringValue = array.join('');
  return parseInt(stringValue);
}


export function isValidValue(input: number) {
  return typeof input === 'number' && input >= 0 && input <= 9;
}

export function throwIfInvalidValue(input: number) {
  if (!isValidValue(input)) {
    throw new Error(`Input must be an integer 0 - 9`);
  }
  
}