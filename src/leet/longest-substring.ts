

export function calculateLongestSubstring(input: string) {
  const arrayOfChars = Array.from(input);
  let biggest = 0;
  for (let i = 0; i < arrayOfChars.length; i++) {
    const lengthOfSubstring = getNumCharactersUntilMatch(arrayOfChars, i);
    if (lengthOfSubstring > biggest) {
      biggest = lengthOfSubstring;
    }
  }
  return biggest;
}

function getNumCharactersUntilMatch(inputArray: string[], startIndex: number) {
  const set: Set<string> = new Set();
  for (let i = startIndex; i < inputArray.length; i++) {
    if (set.has(inputArray[i])) {
      break;
    }
    set.add(inputArray[i]);
  }
  return set.size;
}