import { SinglelyLinkedList } from './interfaces';


export function returnNth(numFromEnd: number, head: SinglelyLinkedList) {
  let node = head;
  let trailer = head;
  let numIterations = 0;
  while (node) {
    if (numIterations > numFromEnd) {
      trailer = trailer.next;
    }
    numIterations++;
    node = node.next;
  }
  return trailer;
}