import type { SinglelyLinkedList } from './interfaces';

export function partition(head: SinglelyLinkedList, partitionValue: number): SinglelyLinkedList {
  // okay, we need to keep a reference to the first node, and then the partition node
  let first = head;
  let current = head;
  let previous;

  while (current) {
    // if the node is less than the partition node and it's not the "front" node, just add it to the front
    const nextNode = current.next;
    if (current != first && current.value! < partitionValue) {
      // add it to the front, and point to the original first node, then update the first node
      current.next = first;
      first = current;
      if (previous?.next && previous?.next === current) {
        previous.next = undefined;
      }
    }
    previous = current;
    current = nextNode!;
  }

  return first;
}
