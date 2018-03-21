import { bubbleSort } from './bubble';
import {
  getLongList,
  getShortList,
  getStringList,
  validateLongList,
  validateShortList,
  validateStringList
} from './test-utils';
import { caseInsensitiveString } from './util';

describe('Bubble Sort', () => {
  describe('bubbleSort', () => {
    it('should sort the list short', () => {
      const list = getShortList();
      const results = bubbleSort(list);
      validateShortList(results);
    });

    it('should sort the list long', () => {
      const list = getLongList();
      const results = bubbleSort(list);
      validateLongList(results);
    });

    it('should sort the list of string', () => {
      const list = getStringList();
      const results = bubbleSort(list, caseInsensitiveString);
      validateStringList(results);
    });
  });
});
