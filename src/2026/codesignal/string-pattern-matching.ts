const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u', 'y']);

export function countPatternMatches(pattern: string, source: string): number {
  const windowSize = pattern.length;
  let maxEndIndex = source.length - windowSize;
  let matchesFound = 0;
  for (let i = 0; i <= maxEndIndex; i++) {
    const substringEndIndex = i + windowSize - 1;
    let patternIndex = 0;
    let patternMatches = true;
    for (let j = i; j <= substringEndIndex; j++) {
      const patternChar = pattern[patternIndex];
      patternIndex++;
      const sourceChar = source[j];
      if (patternChar === '0') {
        // if it's not a vowel, it doens't match
        if (!vowels.has(sourceChar)) {
          patternMatches = false;
          break;
        }
      }
      if (patternChar === '1') {
        // if it is a vowel, it doesn't match
        if (vowels.has(sourceChar)) {
          patternMatches = false;
          break;
        }
      }
    }

    if (patternMatches) {
      matchesFound++;
    }
  }
  return matchesFound;
}
