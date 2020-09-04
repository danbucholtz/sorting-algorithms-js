
const map: Map<string, number> = new Map();
map.set('i', 1);
map.set('v', 5);
map.set('x', 10);
map.set('l', 50);
map.set('c', 100);
map.set('d', 500);
map.set('m', 1000);




export function romanNumeralToInt(input: string) {
  const lowercase = input.toLowerCase();
  return processChars(lowercase);
}


export function processChars(input: string) {
  let sum = 0;
  const array =  Array.from(input);
  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    const nextChar = array[i + 1];
    if (!isValidCharacter(char)) {
      throw new Error(`The character ${char} is invalid`);
    }
    sum+= getIntFromChar(char, nextChar);
  }
  return sum;
}

export function getIntFromChar(char: string, nextChar: string) {
  if (useSubtraction(char, nextChar)) {
    return 0 - map.get(char);
  }
  return map.get(char);
}

export function useSubtraction(char: string, nextChar: string) {
  if ((char === 'i' && nextChar === 'v') || (char === 'i' && nextChar === 'x')) {
    return true;
  }
  else if ((char === 'x' && nextChar === 'l') || (char === 'x' && nextChar === 'c')) {
    return true;
  }
  else if ((char === 'c' && nextChar === 'd') || (char === 'c' && nextChar === 'm')) {
    return true;
  }
  return false;
}


export function isValidCharacter(char: string) {
  return !!map.has(char);
}
