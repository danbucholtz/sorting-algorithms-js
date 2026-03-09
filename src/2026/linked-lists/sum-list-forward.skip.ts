import { describe, expect, it } from 'vitest';
import { SinglelyLinkedList } from './interfaces';
import { sumListsForward } from './sum-list-forward';

describe(sumListsForward.name, () => {
  it('should return 9 -> 1 -> 2', () => {
    const one: SinglelyLinkedList = {
      value: 6,
      next: {
        value: 1,
        next: {
          value: 7,
        },
      },
    };
    const two: SinglelyLinkedList = {
      value: 2,
      next: {
        value: 9,
        next: {
          value: 5,
        },
      },
    };
    const result = sumListsForward(one, two);
    expect(result!.value).toEqual(9);
    expect(result!.next!.value).toEqual(1);
    expect(result!.next!.next!.value).toEqual(2);
  });

  it('should return 1 -> 0 -> 4 -> 9', () => {
    const one: SinglelyLinkedList = {
      value: 6,
      next: {
        value: 1,
        next: {
          value: 7,
        },
      },
    };
    const two: SinglelyLinkedList = {
      value: 4,
      next: {
        value: 3,
        next: {
          value: 2,
        },
      },
    };
    const result = sumListsForward(one, two);
    expect(result!.value).toEqual(1);
    expect(result!.next!.value).toEqual(0);
    expect(result!.next!.next!.value).toEqual(4);
    expect(result!.next!.next!.next!.value).toEqual(9);
  });
});
