export function palindromePermutation(input: string) {
  const map = new Map<string, number>();
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    let numOccurrences = map.get(char) || 0;
    numOccurrences++;
    map.set(char, numOccurrences);
  }

  // if the length of the string is even, we should have an even number of every character if it's a palindrome
  if (input.length % 2 === 0) {
    for (const numOccurences of map.values()) {
      if (numOccurences % 2 !== 0) {
        return false;
      }
    }
  } else {
    let numOdd = 0;
    for (const numOccurences of map.values()) {
      if (numOccurences % 2 !== 0) {
        numOdd++;
      }
    }
    if (numOdd > 1) {
      return false;
    }
  }

  // if the length of the string is odd, we should have an even number of every character except for one if it's a palindrome

  return true;
}

// palindrones
// 'a'
// 'aba'
// 'abba'
// 'abbcbba'
