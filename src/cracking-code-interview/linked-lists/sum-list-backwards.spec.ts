import { SinglelyLinkedList } from './interfaces';
import { sumListsBackwards } from './sum-list-backwards';

describe(sumListsBackwards.name, () => {
  it('should return a list with 2->1->9', () => {
    const one: SinglelyLinkedList = {
      value: 7,
      next: {
        value: 1,
        next: {
          value: 6
        }
      }
    };
    const two: SinglelyLinkedList = {
      value: 5,
      next: {
        value: 9,
        next: {
          value: 2,
        }
      }
    };
    const result = sumListsBackwards(one, two);
    expect(result.value).toBe(2);
    expect(result.next.value).toBe(1);
    expect(result.next.next.value).toBe(9);
  });

  it('should return something else', () => {
    const one: SinglelyLinkedList = {
      value: 8,
      next: {
        value: 8,
        next: {
          value: 8
        }
      }
    };
    const two: SinglelyLinkedList = {
      value: 8,
      next: {
        value: 8,
        next: {
          value: 8,
        }
      }
    };
    const result = sumListsBackwards(one, two);
    expect(result.value).toBe(6);
    expect(result.next.value).toBe(7);
    expect(result.next.next.value).toBe(7);
    expect(result.next.next.next.value).toBe(1);
    
  })
});