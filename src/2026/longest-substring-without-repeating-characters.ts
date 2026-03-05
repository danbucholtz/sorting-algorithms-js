
export function longestSubstringWithoutRepeatingCharacters(input: string): number {
  let longestSubstring = 0;
  let left = 0;
  const lastSeen = new Map<string, number>();
  for (let right = 0; right < input.length; right++) {
    const nextToken = input[right];
    console.log('nextToken: ', nextToken);
    console.log('left: ', left);
    console.log('right: ', right);
    
    const lastSeenAtIndex = lastSeen.get(nextToken);
    if (lastSeenAtIndex !== undefined && lastSeenAtIndex >= left) {
      left = lastSeenAtIndex + 1;
      console.log('updating left to: ', left);
    }

    lastSeen.set(nextToken, right);

    // if it hasn't been seen before
    const windowLength = right - left + 1;
    console.log('window length is: ', windowLength);
    if (windowLength > longestSubstring) {
      longestSubstring = windowLength;
    }
  }
  return longestSubstring;
}

// left = 1
// right = 3
// { a: 3, b: 1, c: 2 }
// longestSubstring = 3