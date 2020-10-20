import { SinglelyLinkedList } from './interfaces';

export function removeDupes(head: SinglelyLinkedList) {
  const set = new Set();
  let node = head;
  let trailer: SinglelyLinkedList = null;
  while (node) {
    if (set.has(node.value)) {
      trailer.next = node.next;
    } else {
      set.add(node.value);
      trailer = node;
    }
    node = node.next;
  }
  return head;
}