import { describe, expect, it } from 'vitest';
import type { SinglelyLinkedList } from './interfaces';
import { isPalindromeLinkedList } from './palindrome';

function buildLinkedList(values: number[]): SinglelyLinkedList | null {
  if (!values.length) {
    return null;
  }

  const head: SinglelyLinkedList = { value: values[0] };
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = { value: values[i] };
    current = current.next!;
  }

  return head;
}

describe(isPalindromeLinkedList.name, () => {
  it('should return true for an odd-length palindrome list', () => {
    const head = buildLinkedList([1, 2, 3, 2, 1]);

    const result = isPalindromeLinkedList(head);

    expect(result).toBe(true);
  });

  it('should return true for an even-length palindrome list', () => {
    const head = buildLinkedList([1, 2, 2, 1]);

    const result = isPalindromeLinkedList(head);

    expect(result).toBe(true);
  });

  it('should return false for a non-palindrome list', () => {
    const head = buildLinkedList([1, 2, 3, 4]);

    const result = isPalindromeLinkedList(head);

    expect(result).toBe(false);
  });

  it('should return true for a single-node list', () => {
    const head = buildLinkedList([42]);

    const result = isPalindromeLinkedList(head);

    expect(result).toBe(true);
  });

  it('should return true for an empty list', () => {
    const result = isPalindromeLinkedList(null);

    expect(result).toBe(true);
  });
});
