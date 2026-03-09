import { SinglelyLinkedList } from './interfaces';

export function removeDupes(head?: SinglelyLinkedList) {
  const visited = new Set<number>();
  let current = head;
  while (current) {
    visited.add(current.value as number);
    // okay, peek ahead and see if the next value already has been visited, if it has, remove it
    const next = current.next;
    if (next && visited.has(next.value as number)) {
      // okay, the next value has already been used.
      // we need to replace the node either with null, or with a the next node if it exists
      if (next.next) {
        current.next = next.next;
      } else {
        current.next = undefined;
      }
    }
    current = next;
  }
  return head;
}
