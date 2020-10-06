
export function stringCompress(input: string) {
  const buffer: string[] = [];
  let numInARow = 1;
  for (let i = 0; i < input.length; i++) {
    if (input[i + 1] && input[i] === input[i + 1]) {
      numInARow++;
    } else {
      buffer.push(input[i]);
      buffer.push(`${numInARow}`);
      numInARow = 1;
    }
  }
  if (buffer.length > input.length) {
    return input;
  }
  return buffer.join('');
}