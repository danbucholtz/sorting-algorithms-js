import { urlify } from './urlify';

describe(urlify.name, () => {
  it('should url encode spaces', () => {
    const input = 'a b  '; // two trailing spaces per space at the end per requirements
    const resultOne = urlify(input);
    expect(resultOne).toBe('a%20b');

    const resultTwo = urlify('mr john smith    ');
    expect(resultTwo).toBe('mr%20john%20smith');
  });
});