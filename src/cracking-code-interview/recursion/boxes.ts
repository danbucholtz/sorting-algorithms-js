export interface Box {
  width?: number;
  height?: number;
  depth?: number;
}

export function stackOfBoxes(boxes: Box[]) {
  // sort the list to put the biggest at the front of the list
  boxes.sort((one, two) => {
    if (canBeStacked(one, two)) {
      return -1;
    }
    return 1;
  });
  
  // then loop over and count how many in a row we can stack
  const values = [];
  let currentStackSize = 0;
  for (let i = 0; i < boxes.length; i++) {
    const biggerBox = boxes[i]
    const smallerBox = boxes[i + 1];
    if (biggerBox && smallerBox && canBeStacked(biggerBox, smallerBox)) {
      currentStackSize += biggerBox.height;
    } else {
      currentStackSize += biggerBox.height;
      values.push(currentStackSize);
      currentStackSize = 0;
    }
  }

  // find the biggest value in values and return it
  if (values.length === 0) {
    return 0;
  }
  let max = 0;
  for (const value of values) {
    if (value > max) {
      max = value;
    }
  }
  return max;
}

function canBeStacked(biggerBox: Box, smallerBox: Box) {
  return biggerBox.height > smallerBox.height && biggerBox.width > smallerBox.width && biggerBox.depth > smallerBox.depth;
}