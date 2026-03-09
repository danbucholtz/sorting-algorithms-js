import type { SinglelyLinkedList } from './interfaces';

export function detectLoopStart(head: SinglelyLinkedList): SinglelyLinkedList | null {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;
    if (slow === fast) {
      break;
    }
  }
  if (!fast || !fast.next) {
    return null;
  }
  // okay, we know there's a loop,
  while (head !== slow) {
    head = head.next!;
    slow = slow.next!;
  }
  return head;
}

// i = 2
// single -> 1
// double -> 1
