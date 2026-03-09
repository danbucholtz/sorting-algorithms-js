import { describe, expect, it } from 'vitest';
import type { SinglelyLinkedList } from './interfaces';
import { deleteMiddleNode } from './delete-middle-node';

function buildLinkedList(values: number[]): SinglelyLinkedList {
  const head: SinglelyLinkedList = { value: values[0] };
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = { value: values[i] };
    current = current.next!;
  }

  return head;
}

function toArray(head: SinglelyLinkedList | null): number[] {
  const result: number[] = [];
  let current: SinglelyLinkedList | null | undefined = head;

  while (current) {
    if (current.value === undefined) {
      throw new Error('Invalid linked list node: value is undefined');
    }
    result.push(current.value);
    current = current.next;
  }

  return result;
}

function getNodeAt(head: SinglelyLinkedList, index: number): SinglelyLinkedList {
  let current: SinglelyLinkedList | undefined = head;
  let currentIndex = 0;

  while (current && currentIndex < index) {
    current = current.next;
    currentIndex++;
  }

  return current!;
}

describe(deleteMiddleNode.name, () => {
  it('should delete a middle node in an odd-length list', () => {
    const head = buildLinkedList([1, 2, 3, 4, 5]);
    const nodeToDelete = getNodeAt(head, 2);

    deleteMiddleNode(nodeToDelete);

    expect(toArray(head)).toEqual([1, 2, 4, 5]);
  });

  it('should delete a middle node in an even-length list', () => {
    const head = buildLinkedList([1, 2, 3, 4]);
    const nodeToDelete = getNodeAt(head, 1);

    deleteMiddleNode(nodeToDelete);

    expect(toArray(head)).toEqual([1, 3, 4]);
  });

  it('should return false when attempting to delete the tail node', () => {
    const head = buildLinkedList([1, 2, 3]);
    const nodeToDelete = getNodeAt(head, 2);

    deleteMiddleNode(nodeToDelete);

    expect(toArray(head)).toEqual([1, 2, 3]);
  });

  it('should return false for a single-node list', () => {
    const head = buildLinkedList([42]);

    deleteMiddleNode(head);

    expect(toArray(head)).toEqual([42]);
  });
});
