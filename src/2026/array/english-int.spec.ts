import { describe, expect, it } from 'vitest';
import { englishInt, processChunk } from './english-int';

describe(englishInt.name, () => {
  it('should handle zero', () => {
    expect(englishInt(0)).toBe('zero');
  });

  it('should handle single digit values', () => {
    expect(englishInt(7)).toBe('seven');
  });

  it('should handle teens', () => {
    expect(englishInt(13)).toBe('thirteen');
  });

  it('should handle tens', () => {
    expect(englishInt(42)).toBe('forty two');
  });

  it('should handle hundreds', () => {
    expect(englishInt(305)).toBe('three hundred five');
  });

  it('should handle thousands', () => {
    expect(englishInt(12034)).toBe('twelve thousand thirty four');
  });

  it('should handle millions', () => {
    expect(englishInt(1000001)).toBe('one million one');
  });

  it('should handle larger composite values', () => {
    expect(englishInt(123456789)).toBe(
      'one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine',
    );
  });

  it('should handle negative numbers', () => {
    expect(englishInt(-56)).toBe('negative fifty six');
  });

  it('basic test', () => {
    expect(englishInt(72536273)).toBe(
      'seventy two million five hundred thirty six thousand two hundred seventy three',
    );
  });
});
describe(processChunk.name, () => {
  it('should handle single digit values', () => {
    expect(processChunk(7)).toBe('Seven');
  });

  it('should handle teen values', () => {
    expect(processChunk(13)).toBe('Thirteen');
  });

  it('should handle tens values', () => {
    expect(processChunk(40)).toBe('Forty');
    expect(processChunk(42)).toBe('Forty Two');
  });

  it('should handle exact hundreds', () => {
    expect(processChunk(100)).toBe('One Hundred');
    expect(processChunk(900)).toBe('Nine Hundred');
  });

  it('should handle mixed hundreds values', () => {
    expect(processChunk(305)).toBe('Three Hundred Five');
    expect(processChunk(937)).toBe('Nine Hundred Thirty Seven');
  });
});
