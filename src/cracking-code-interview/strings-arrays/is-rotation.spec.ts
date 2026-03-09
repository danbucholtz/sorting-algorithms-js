import { describe, expect, it } from 'vitest';
import { isRotation } from './is-rotation';

interface RotationTestCase {
  name: string;
  rotatedString: string;
  originalString: string;
  expected: boolean;
}

function allRotations(input: string): string[] {
  if (input.length === 0) {
    return [''];
  }

  const result: string[] = [];
  for (let i = 0; i < input.length; i++) {
    result.push(input.slice(i) + input.slice(0, i));
  }
  return result;
}

describe(isRotation.name, () => {
  it('should return true for every valid rotation of the same string', () => {
    const originalString = 'waterfall';
    const rotations = allRotations(originalString);

    for (const rotatedString of rotations) {
      const result = isRotation(rotatedString, originalString);
      expect(result).toBe(true);
    }
  });

  const testCases: RotationTestCase[] = [
    {
      name: 'same string should be a valid rotation',
      rotatedString: 'waterfall',
      originalString: 'waterfall',
      expected: true,
    },
    {
      name: 'single-character shift should be a valid rotation',
      rotatedString: 'llwaterfa',
      originalString: 'waterfall',
      expected: true,
    },
    {
      name: 'same length but reordered letters should not be a rotation',
      rotatedString: 'wtaerfall',
      originalString: 'waterfall',
      expected: false,
    },
    {
      name: 'different lengths should return false',
      rotatedString: 'llwaterfall',
      originalString: 'waterfall',
      expected: false,
    },
    {
      name: 'completely different strings should return false',
      rotatedString: 'banana',
      originalString: 'spaghetti',
      expected: false,
    },
    {
      name: 'empty strings should be considered a valid rotation',
      rotatedString: '',
      originalString: '',
      expected: true,
    },
    {
      name: 'repeated characters should still support valid rotations',
      rotatedString: 'aabaaa',
      originalString: 'aaaaba',
      expected: true,
    },
  ];

  for (const testCase of testCases) {
    it(testCase.name, () => {
      const result = isRotation(testCase.rotatedString, testCase.originalString);
      expect(result).toBe(testCase.expected);
    });
  }

  it('should be case-sensitive', () => {
    const result = isRotation('Erwat', 'water');
    expect(result).toBe(false);
  });
});
