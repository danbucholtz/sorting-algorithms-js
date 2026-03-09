import { describe, expect, it } from 'vitest';
import { SinglelyLinkedList } from './interfaces';
import { sumListsBackwards } from './sum-list-backward';

describe(sumListsBackwards.name, () => {
  it('should return 912 in reverse (2 -> 1 -> 9)', () => {
    const one: SinglelyLinkedList = {
      value: 7,
      next: {
        value: 1,
        next: {
          value: 6,
        },
      },
    };
    const two: SinglelyLinkedList = {
      value: 5,
      next: {
        value: 9,
        next: {
          value: 2,
        },
      },
    };
    const result = sumListsBackwards(one, two);
    expect(result!.value).toEqual(2);
    expect(result!.next!.value).toEqual(1);
    expect(result!.next!.next!.value).toEqual(9);
  });

  it('should return 1049 in reverse (9 -> 4 -> 0 -> 1)', () => {
    const one: SinglelyLinkedList = {
      value: 7,
      next: {
        value: 1,
        next: {
          value: 6,
        },
      },
    };
    const two: SinglelyLinkedList = {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
        },
      },
    };
    const result = sumListsBackwards(one, two);
    expect(result!.value).toEqual(9);
    expect(result!.next!.value).toEqual(4);
    expect(result!.next!.next!.value).toEqual(0);
    expect(result!.next!.next!.next!.value).toEqual(1);
  });
});
