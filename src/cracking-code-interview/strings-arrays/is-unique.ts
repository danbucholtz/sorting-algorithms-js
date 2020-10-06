
// no extra data structures, just arrays
export function isUnique(input: string) {
  
  // 128 ascii chars
  if (input.length > 128) {
    return false;
  }

  const table: string[] = [];
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    if (table[char]) {
      return false;
    }
    table[char] = input[i];
  }
  return true;
}