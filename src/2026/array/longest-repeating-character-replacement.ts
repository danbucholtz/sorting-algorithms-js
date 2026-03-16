export type CharacterReplacementInput = string;
export type ReplacementCount = number;

export function characterReplacement(
  input: CharacterReplacementInput,
  k: ReplacementCount,
): number {
  let longestOneCharSubstring = 0;
  let left = 0;
  let right = 0;
  if (input.length === 0) {
    return 0;
  }
  while (left <= right && right < input.length) {
    console.log('left: ', left);
    console.log('right: ', right);
    const validRangeResponse = isValidRange(left, right, k, input);
    if (validRangeResponse.valid) {
      // first, let's see if it's longer than the current longest
      if (validRangeResponse.length > longestOneCharSubstring) {
        longestOneCharSubstring = validRangeResponse.length;
      }
      // okay, let's see if we can make it any longer by
      // pushing right out
      right++;
    } else {
      // welp, it's not valid, so we had better shorten it up
      // by moving the left pointer to the right
      left++;
    }
  }
  return longestOneCharSubstring;
}

function isValidRange(
  startIndex: number,
  endIndex: number,
  k: number,
  source: string,
): { valid: boolean; length: number } {
  console.log(
    `Processing start ${startIndex} through end ${endIndex}: `,
    source.substring(startIndex, endIndex + 1),
  );
  const charCountMap = new Map<string, number>();
  for (let i = startIndex; i <= endIndex; i++) {
    const char = source[i];
    let count = charCountMap.get(char) || 0;
    count++;
    charCountMap.set(char, count);
  }
  const valid = isCharCountMapValid(charCountMap, k);
  const length = endIndex - startIndex + 1;
  console.log(`valid: `, valid, length);
  return {
    valid,
    length,
  };
}

function isCharCountMapValid(map: Map<string, number>, k: number): boolean {
  const sorted = Array.from(map.entries()).sort(
    (a: [string, number], b: [string, number]) => a[1] - b[1],
  );
  // we don't need to look at the biggest entry here
  // if the sum of all of the small entries - k > 0, the string is invalid
  let charCount = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    charCount += sorted[i][1];
  }
  return charCount - k <= 0;
}
