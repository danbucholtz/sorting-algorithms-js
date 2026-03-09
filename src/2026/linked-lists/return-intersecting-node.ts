import type { SinglelyLinkedList } from './interfaces';

export function returnIntersectingNode(
  one: SinglelyLinkedList,
  two: SinglelyLinkedList,
): SinglelyLinkedList | null {
  let oneLength = 0;
  let oneRunner = one;
  while (oneRunner) {
    oneLength++;
    oneRunner = oneRunner.next!;
  }

  let twoLength = 0;
  let twoRunner = two;
  while (twoRunner) {
    twoLength++;
    twoRunner = twoRunner.next!;
  }

  let shorter = oneLength > twoLength ? two : one;
  let longer = shorter === one ? two : one;
  let difference = Math.abs(twoLength - oneLength);
  let i = 0;

  while (longer) {
    if (longer === shorter) {
      return shorter;
    }

    i++;

    longer = longer.next!;
    if (i > difference) {
      shorter = shorter.next!;
    }
  }

  return null;
}
