export function isUnique(input: string): boolean {
  // 128 ascii chars
  if (input.length > 128) {
    return false;
  }
  const arraySet: string[] = [];
  for (let i = 0; i < input.length; i++) {
    const characterCode = input.charCodeAt(i);
    if (arraySet[characterCode] !== undefined) {
      return false;
    }
    arraySet[characterCode] = input[i];
  }
  return true;
}
