import { insertionSort } from './insertion';
import {
  getLongList,
  getShortList,
  getStringList,
  validateLongList,
  validateShortList,
  validateStringList
} from './test-utils';
import { caseInsensitiveString } from './util';

describe('Insertion Sort', () => {
  describe('insertionSort', () => {
    it('should sort the list short', () => {
      const list = getShortList();
      const results = insertionSort(list);
      validateShortList(results);
    });  

    it('should sort the list long', () => {
      const list = getLongList();
      const results = insertionSort(list);
      validateLongList(results);
    });

    it('should sort the list of string', () => {
      const list = getStringList();
      const results = insertionSort(list, caseInsensitiveString);
      validateStringList(results);
    });
    
  });
});
