export function urlify(input: string) {
  let numCharsMoved = 0;
  const buffer: string[] = [];
  for (let i = input.length - 1; i >= 0; i--) {
    console.log('buffer: ', buffer);
    const endPos = input.length - 1 - numCharsMoved;
    if (input[i] === ' ' && numCharsMoved > 0) {
      buffer[endPos] = '0';
      buffer[endPos - 1] = '2';
      buffer[endPos - 2] = '%';
      numCharsMoved = numCharsMoved + 3;
    } else if (input[i] !== ' ') {
      buffer[endPos] = input[i];
      numCharsMoved++;
    }
  }
  return buffer.join('');
}
