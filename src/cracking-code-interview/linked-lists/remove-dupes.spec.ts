import { SinglelyLinkedList } from './interfaces';
import { removeDupes } from './remove-dupes';

describe(removeDupes.name, () => {
  it('should not alter the list when there are no dupes', () => {
    const linkedList: SinglelyLinkedList = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
        }
      }
    };
    let result = removeDupes(linkedList);
    let numItems = 0;
    while (result) {
      numItems++;
      expect(result.value).toBe(numItems);
      result = result.next;
    }
    expect(numItems).toBe(3);
  });

  it('should remove the dupes', () => {
    const linkedList: SinglelyLinkedList = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 2,
          next: {
            value: 3,
          }
        }
      }
    };
    let result = removeDupes(linkedList);
    let numItems = 0;
    while (result) {
      numItems++;
      expect(result.value).toBe(numItems);
      result = result.next;
    }
    expect(numItems).toBe(3);
  });
});