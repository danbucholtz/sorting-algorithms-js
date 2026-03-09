import { SinglelyLinkedList } from './interfaces';

export function deleteMiddleNode(node: SinglelyLinkedList): SinglelyLinkedList {
  if (!node.next) {
    // this is the last node, so it's by definition not a middle node, idk, just chill
    return node;
  }

  node.value = node.next?.value;
  node.next = node.next?.next ?? undefined;

  return node;
}
