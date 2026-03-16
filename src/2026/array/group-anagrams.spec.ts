import { describe, expect, it } from 'vitest';
import { groupAnagrams } from './group-anagrams';

function normalizeGroups(groups: string[][]): string[][] {
  return groups
    .map((group) => [...group].sort())
    .sort((groupOne, groupTwo) => groupOne.join(',').localeCompare(groupTwo.join(',')));
}

describe(groupAnagrams.name, () => {
  it('should group the first prompt example', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

    const result = groupAnagrams(strs);

    expect(normalizeGroups(result)).toEqual(
      normalizeGroups([['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]),
    );
  });

  it('should group the empty string prompt example', () => {
    const strs = [''];

    const result = groupAnagrams(strs);

    expect(normalizeGroups(result)).toEqual(normalizeGroups([['']]));
  });

  it('should group the single character prompt example', () => {
    const strs = ['a'];

    const result = groupAnagrams(strs);

    expect(normalizeGroups(result)).toEqual(normalizeGroups([['a']]));
  });

  it('should return an empty array for empty input', () => {
    const result = groupAnagrams([]);

    expect(result).toEqual([]);
  });

  it('should keep non-anagrams in separate groups', () => {
    const strs = ['abc', 'def', 'ghi'];

    const result = groupAnagrams(strs);

    expect(normalizeGroups(result)).toEqual(normalizeGroups([['abc'], ['def'], ['ghi']]));
  });

  it('should keep duplicate strings in the same anagram group', () => {
    const strs = ['ab', 'ba', 'ab'];

    const result = groupAnagrams(strs);

    expect(normalizeGroups(result)).toEqual(normalizeGroups([['ab', 'ab', 'ba']]));
  });
});
