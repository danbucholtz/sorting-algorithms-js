import { romanNumeralToInt } from './roman-numerals';

describe('Roman Numerals', () => {
  describe(romanNumeralToInt.name, () => {
    it('should return 3', () => {
      const result = romanNumeralToInt('iii');
      expect(result).toBe(3);
    });

    it('should return 9 when given ix', () => {
      const result = romanNumeralToInt('ix');
      expect(result).toBe(9);
    });

    it('should return 4 when given IV', () => {
      const result = romanNumeralToInt('IV');
      expect(result).toBe(4);
    });

    it('should return 58 when given LVIII', () => {
      const result = romanNumeralToInt('LVIII');
      expect(result).toBe(58);
    });

    it('should return 1994 when given MCMXCIV', () => {
      const result = romanNumeralToInt('MCMXCIV');
      expect(result).toBe(1994);
    });

    it('should return 84 when given LXXXIV', () => {
      const result = romanNumeralToInt('LXXXIV');
      expect(result).toBe(84);
    });
    
  });
});