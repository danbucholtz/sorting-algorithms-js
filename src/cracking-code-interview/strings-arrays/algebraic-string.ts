

export function calculateString(input: string[]) {
  // TODO - validate input

  // first, process all multiplication and reduce the array to addition operations
  const array: string[] = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '+') {
      //array.push('+');
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
      array.push('' + currentValue);
  } else {
      if (input[i] != '' && input[i + 1] !== '*') {
        array.push(input[i]);
      }
    }
  }
  
  // sum up the list in a second loop
  let startValue = 0;
  for (const value of array) {
    startValue += parseInt(value);
  }
  return startValue;
}
