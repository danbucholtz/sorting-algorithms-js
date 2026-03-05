import { describe, expect, it } from 'vitest';
import { urlify } from './urlify';

describe(urlify.name, () => {
  it('should url encode spaces', () => {
    const input = 'a b'; // two trailing spaces per space at the end per requirements
    const resultOne = urlify(input);
    expect(resultOne).toBe('a%20b');
    const resultTwo = urlify('mr john smith');
    expect(resultTwo).toBe('mr%20john%20smith');
    const resultThree = urlify('ab');
    expect(resultThree).toBe('ab');
    const resultFour = urlify('a b');
    expect(resultFour).toBe('a%20b');
  });
});
