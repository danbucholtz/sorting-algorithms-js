import { selectionSort } from './selection';
import {
  getLongList,
  getShortList,
  getStringList,
  validateLongList,
  validateShortList,
  validateStringList
} from './test-utils';
import { caseInsensitiveString } from './util';

describe('Selection Sort', () => {
  describe('selectionSort', () => {
    it('should sort the list short', () => {
      const list = getShortList();
      const results = selectionSort(list);
      validateShortList(results);
    });
    

    it('should sort the list long', () => {
      const list = getLongList();
      const results = selectionSort(list);
      validateLongList(results);
    });

    it('should sort the list of string', () => {
      const list = getStringList();
      const results = selectionSort(list, caseInsensitiveString);
      validateStringList(results);
    });
  });
});
