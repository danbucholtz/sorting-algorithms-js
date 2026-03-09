import type { SinglelyLinkedList } from './interfaces';

export function isPalindromeLinkedList(head: SinglelyLinkedList | null): boolean {
  const stack = [];
  let runner = head;
  while (runner) {
    stack.push(runner.value);
    runner = runner.next!;
  }

  while (head) {
    const mirroredValue = stack.pop();
    if (mirroredValue !== head.value) {
      return false;
    }
    head = head.next!;
  }
  return true;
}
