
import { defaultComparator } from './util';

describe('util', () => {
  describe('defaultComparator', () => {
    it('should sort in ascending order', () => {
      const array = [5, 1, 3, 2, 10, 17, 4];
      const results = array.sort(defaultComparator);
      expect(results.length).toEqual(7);
      expect(results[0]).toEqual(1);
      expect(results[1]).toEqual(2);
      expect(results[2]).toEqual(3);
      expect(results[3]).toEqual(4);
      expect(results[4]).toEqual(5);
      expect(results[5]).toEqual(10);
      expect(results[6]).toEqual(17);
    })
  });
});
