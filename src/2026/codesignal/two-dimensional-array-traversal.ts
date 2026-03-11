export function solution(field: number[][], figure: number[][]): number {
  const height = field.length;
  const width = field[0].length;
  const figureHeight = figure.length;
  const figureWidth = figure[0].length;
  const maxHorizontalIndex = width - figureWidth;
  const maxVerticalIndex = height - figureHeight;

  const validStartPositions: { row: number; col: number }[] = [];
  for (let col = 0; col <= maxHorizontalIndex; col++) {
    let collisionFound = false;
    for (let row = 0; row <= maxVerticalIndex; row++) {
      if (!figureFits(row, col, field, figure)) {
        collisionFound = true;
        // okay, we found a collision, so we can't go any further down this column
        validStartPositions.push({ col, row: row - 1 });
        break;
      }
    }
    if (!collisionFound) {
      // there wasn't a collision found for that row, so use the last row
      validStartPositions.push({ col, row: maxVerticalIndex });
    }
  }
  console.log('validStartPositions: ', validStartPositions);

  const numCompletedPerColList = validStartPositions.map((startPosition) => {
    return numCompleteRows(startPosition.row, startPosition.col, field, figure);
  });

  console.log('numCompletedPerColList: ', numCompletedPerColList);

  let indexToReturn = -1;
  let maxCompleted = 0;
  for (const numCompletedPerCol of numCompletedPerColList) {
    if (numCompletedPerCol.numCompleteRows > maxCompleted) {
      maxCompleted = numCompletedPerCol.numCompleteRows;
      indexToReturn = numCompletedPerCol.col;
    }
  }
  return indexToReturn;
}

function figureFits(row: number, col: number, field: number[][], figure: number[][]): boolean {
  let collision = false;
  for (let figureRow = 0; figureRow < figure.length; figureRow++) {
    for (let figureCol = 0; figureCol < figure[0].length; figureCol++) {
      if (field[row + figureRow][col + figureCol] === 1 && figure[figureRow][figureCol] === 1) {
        collision = true;
        break;
      }
    }
  }
  return collision === false;
}

function numCompleteRows(
  startRow: number,
  startCol: number,
  field: number[][],
  figure: number[][],
): { numCompleteRows: number; col: number } {
  let numCompleteRows = 0;
  console.log(`processing row ${startRow}, col ${startCol} ...`);
  for (let row = startRow; row < startRow + figure.length; row++) {
    const rowArray = field[row];
    console.log('rowArray: ', rowArray);
    // okay, we need to loop over the array. We want everything to be 1.
    // if we're inside of the window (startCol -> startCol + width of figure), we want to consult the figure
    // instead of the source array
    let zeroFound = false;
    for (let i = 0; i < rowArray.length; i++) {
      if (i >= startCol && i <= startCol + figure[0].length - 1) {
        console.log('looking in the window for i', i);
        console.log('window value: ', figure[row - startRow][i - startCol]);
        if (field[row][i] === 0 && figure[row - startRow][i - startCol] === 0) {
          zeroFound = true;
        }
      } else {
        if (field[row][i] === 0) {
          zeroFound = true;
        }
      }
    }
    if (!zeroFound) {
      numCompleteRows++;
    }
  }
  console.log('\n\n\n');
  return {
    numCompleteRows,
    col: startCol,
  };
}
