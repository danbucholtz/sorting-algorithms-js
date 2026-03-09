import { SinglelyLinkedList } from './interfaces';

export function returnNth(numFromEnd: number, head: SinglelyLinkedList) {
  let elementCount = 0;
  let leader: SinglelyLinkedList | undefined = head;
  let trailer: SinglelyLinkedList | undefined = head;
  while (leader?.next) {
    leader = leader.next;
    elementCount++;
    if (elementCount > numFromEnd) {
      trailer = trailer?.next;
    }
  }
  return trailer;
}
