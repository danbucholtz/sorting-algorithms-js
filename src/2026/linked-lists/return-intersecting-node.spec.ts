import { describe, expect, it } from 'vitest';
import type { SinglelyLinkedList } from './interfaces';
import { returnIntersectingNode } from './return-intersecting-node';

function buildLinkedList(values: number[]): SinglelyLinkedList {
  const head: SinglelyLinkedList = { value: values[0] };
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = { value: values[i] };
    current = current.next!;
  }

  return head;
}

function appendList(head: SinglelyLinkedList, tail: SinglelyLinkedList): SinglelyLinkedList {
  if (!head) {
    return tail;
  }

  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = tail ?? undefined;
  return head;
}

describe(returnIntersectingNode.name, () => {
  it('should return the first shared node when two lists intersect', () => {
    const sharedTail = buildLinkedList([7, 2, 1]);
    const headOne = appendList(buildLinkedList([3, 1, 5, 9]), sharedTail);
    const headTwo = appendList(buildLinkedList([4, 6]), sharedTail);

    const result = returnIntersectingNode(headOne, headTwo);

    expect(result).toBe(sharedTail);
    expect(result?.value).toBe(7);
  });

  it('should return null when two lists do not intersect', () => {
    const headOne = buildLinkedList([1, 2, 3]);
    const headTwo = buildLinkedList([4, 5, 6]);

    const result = returnIntersectingNode(headOne, headTwo);

    expect(result).toBeNull();
  });

  it('should handle intersection at the head node', () => {
    const sharedHead = buildLinkedList([8, 9, 10]);

    const result = returnIntersectingNode(sharedHead, sharedHead);

    expect(result).toBe(sharedHead);
    expect(result?.value).toBe(8);
  });
});
