import { LinkedListNode, reverseAndSumLinkedLists } from './reverse-sum-linked-lists';

describe('reverse sum linked lists', () => {
  it('given two linked lists of integers 0-9, it will reverse them and add them together per the spec', () => {
    /*Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

    const linkedListOneTestOne: LinkedListNode = {
      value: 2,
      next: {
        value: 4,
        next: {
          next: null,
          value: 3
        }
      }
    };

    const linkedListTwoTestOne: LinkedListNode = {
      value: 5,
      next: {
        value: 6,
        next: {
          next: null,
          value: 4
        }
      }
    };

    const result = reverseAndSumLinkedLists(linkedListOneTestOne, linkedListTwoTestOne);
    expect(result).toBe(807);

    const linkedListOneTestTwo: LinkedListNode = {
      value: 2,
      next: null,
    };

    const linkedListTwoTestTwo: LinkedListNode = {
      value: 1,
      next: {
        value: 1,
        next: {
          next: null,
          value: 1
        }
      }
    };

    const resultTwo = reverseAndSumLinkedLists(linkedListOneTestTwo, linkedListTwoTestTwo);
    expect(resultTwo).toBe(113);
  });

  it('should throw when given an empty list', () => {
    try {
      const inputTwo: LinkedListNode = {
        value: 1,
        next: {
          value: 1,
          next: {
            next: null,
            value: 1
          }
        }
      };
      reverseAndSumLinkedLists(null, inputTwo);
      throw new Error(`should never get here`);
    } catch(ex) {
      expect(ex.message).toBe(`Invalid input, no entries found`);
    }
  });

  it('should throw when invalid digit', () => {
    try {
      const inputOne: LinkedListNode = {
        value: 2,
        next: null,
      };
      const inputTwo: LinkedListNode = {
        value: 11,
        next: {
          value: 1,
          next: {
            next: null,
            value: 1
          }
        }
      };
      reverseAndSumLinkedLists(inputOne, inputTwo);
      throw new Error(`should never get here`);
    } catch(ex) {
      expect(ex.message).toBe(`Input must be an integer 0 - 9`);
    }
  });
});