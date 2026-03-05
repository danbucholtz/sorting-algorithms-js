// permutation means the strings have the same characters but possibly in a different order

export function checkPermutations(one: string, two: string) {
  if (one.length !== two.length) {
    return false;
  }

  const stringOneCharCount = new Map<string, number>();
  const stringTwoCharCount = new Map<string, number>();

  for (let i = 0; i < one.length; i++) {
    const char = one[i];
    const charCount = stringOneCharCount.get(char) || 0;
    stringOneCharCount.set(char, charCount);
  }

  for (let i = 0; i < two.length; i++) {
    const char = two[i];
    const charCount = stringTwoCharCount.get(char) || 0;
    stringTwoCharCount.set(char, charCount);
  }

  if (stringOneCharCount.size !== stringTwoCharCount.size) {
    return false;
  }

  for (let i = 0; i < one.length; i++) {
    const char = one[i];
    const charOneCount = stringOneCharCount.get(char);
    const charTwoCount = stringTwoCharCount.get(char);
    if (charOneCount !== charTwoCount) {
      return false;
    }
  }
  return true;
}
