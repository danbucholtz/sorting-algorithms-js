export function stringCompress(input: string) {
  const array: { char: string; num: number }[] = [];
  let currentChar = undefined;
  let currentCount = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === currentChar) {
      currentCount++;
    } else {
      // okay, we switched characters, so we need to flush to an array
      if (currentChar !== undefined) {
        array.push({ char: currentChar as string, num: currentCount });
      }

      currentCount = 1;
      currentChar = char;
    }
  }

  array.push({ char: currentChar as string, num: currentCount });

  let compressedOutput = '';
  for (let i = 0; i < array.length; i++) {
    const newSection = `${array[i].char}${array[i].num}`;
    compressedOutput = `${compressedOutput}${newSection}`;
  }
  // okay, we have the compressed output, now we only want to return it if it's shorter than original
  if (input.length > compressedOutput.length) {
    return compressedOutput;
  }
  return input;
}
