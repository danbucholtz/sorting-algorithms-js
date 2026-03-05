export function urlify(input: string) {
  const buffer = new Array(input.length + 100); // fixed array size for now, assumption
  let numCharsMoved = 0;
  for (let i = input.length - 1; i >= 0; i--) {
    const char = input[i];
    console.log('char: ', char);

    let insertionIndex = buffer.length - 1 - numCharsMoved;
    console.log('insertionIndex: ', insertionIndex);

    if (char !== ' ') {
      buffer[insertionIndex] = char;
      numCharsMoved++;
    } else if (char === ' ' && numCharsMoved > 0) {
      buffer[insertionIndex] = '0';
      buffer[insertionIndex - 1] = '2';
      buffer[insertionIndex - 2] = '%';
      numCharsMoved = numCharsMoved + 3;
    }
  }
  return buffer.join('');
}
