

export function calculateString(input: string[]) {
  // TODO - validate input

  // first, process all multiplication and reduce the array to addition operations
  let startValue = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '+') {
      continue;
    }
    else if (input[i] === '*') {
      let currentValue = 0;
      while (input[i + 1] !== '+' && i < input.length) {
        if (input[i] !== '') {
          if (currentValue === 0) {
            const value = parseInt(input[i - 1]);
            const otherValue = parseInt(input[i + 1]);
            currentValue = value * otherValue;
          } else {
            currentValue = currentValue * parseInt(input[i + 1]);
          }
          input[i - 1] = '';
          input[i + 1] = '';
          
        }
        i++;
      }
      startValue += currentValue;
  } else {
      if (input[i] != '' && input[i + 1] !== '*') {
        startValue += parseInt(input[i]);
      }
    }
  }

 return startValue;
}
