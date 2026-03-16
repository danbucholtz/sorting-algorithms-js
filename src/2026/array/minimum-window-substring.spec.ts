import { describe, expect, it } from 'vitest';
import { minWindow } from './minimum-window-substring';

describe(minWindow.name, () => {
  it('should return the first prompt example window', () => {
    const result = minWindow('ADOBECODEBANC', 'ABC');

    expect(result).toBe('BANC');
  });

  it('should return the second prompt example window', () => {
    const result = minWindow('a', 'a');

    expect(result).toBe('a');
  });

  it('should return an empty string for the third prompt example', () => {
    const result = minWindow('a', 'aa');

    expect(result).toBe('');
  });

  it('should account for duplicate characters in the target', () => {
    const result = minWindow('bbaa', 'aba');

    expect(result).toBe('baa');
  });

  it('should return an empty string when the source is shorter than the target', () => {
    const result = minWindow('ab', 'abc');

    expect(result).toBe('');
  });

  it('should find a minimum window at the start of the source', () => {
    const result = minWindow('CABEFGECDAECF', 'CAB');

    expect(result).toBe('CAB');
  });

  it('should find a minimum window at the end of the source', () => {
    const result = minWindow('ZZXYABC', 'ABC');

    expect(result).toBe('ABC');
  });

  it('should return an empty string when no valid window exists', () => {
    const result = minWindow('hello', 'world');

    expect(result).toBe('');
  });
});
