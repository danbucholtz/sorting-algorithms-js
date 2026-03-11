export type AntDirection = 'N' | 'E' | 'S' | 'W';

const ANT_DIRECTION_DICTIONARY: { [K in AntDirection]: number } = {
  N: 0,
  E: 1,
  S: 2,
  W: 3,
} as const;

export interface AntState {
  x: number;
  y: number;
  direction: AntDirection;
}

export interface LangtonsAntResult {
  ant: AntState;
  blackCells: string[];
}

export function runLangtonsAnt(steps: number): LangtonsAntResult {
  const blackCoordinates = new Set<string>();
  let currentDirection: AntDirection = 'E';
  let currentCoordinate = { row: 0, col: 0 };
  let currentStep = 0;
  while (currentStep < steps) {
    const currentCoordinateString = getStringOfCoordinate(currentCoordinate);

    // check if the coordinate is white or black
    if (blackCoordinates.has(currentCoordinateString)) {
      // it's black
      // first, remove the coortdinate because it's flipping to white
      blackCoordinates.delete(currentCoordinateString);
      currentDirection = getNextDirection(currentDirection, true);
    } else {
      // it's white, so first mark it as black
      blackCoordinates.add(currentCoordinateString);
      currentDirection = getNextDirection(currentDirection, false);
    }

    currentCoordinate = moveCoordinate(currentDirection, currentCoordinate);

    currentStep++;
    console.log('####');
  }
  const coordinates = Array.from(blackCoordinates);

  return {
    ant: {
      direction: currentDirection,
      x: currentCoordinate.col,
      y: currentCoordinate.row,
    },
    blackCells: coordinates,
  };
}

function getStringOfCoordinate(coordinate: { row: number; col: number }): string {
  return `${coordinate.col},${coordinate.row}`;
}

function moveCoordinate(
  direction: AntDirection,
  currentCoordinate: { row: number; col: number },
): { row: number; col: number } {
  const newCoordinate = { ...currentCoordinate };
  if (direction === 'N') {
    newCoordinate.row = newCoordinate.row - 1;
  } else if (direction === 'E') {
    newCoordinate.col = newCoordinate.col + 1;
  } else if (direction === 'S') {
    newCoordinate.row = newCoordinate.row + 1;
  } else {
    // direction === 'W'
    newCoordinate.col = newCoordinate.col - 1;
  }
  return newCoordinate;
}

function getNextDirection(direction: AntDirection, left: boolean) {
  let value = ANT_DIRECTION_DICTIONARY[direction];
  if (left) {
    value = (value + 3) % 4;
    return getDirectionFromValue(value);
  }
  value = (value + 1) % 4;
  return getDirectionFromValue(value);
}

function getDirectionFromValue(input: number): AntDirection {
  const antDictionaryEntires = Object.entries(ANT_DIRECTION_DICTIONARY);
  const directionTuple = antDictionaryEntires.find(([direction, value]) => {
    return value === input ? direction : undefined;
  });
  if (directionTuple === undefined) {
    throw new Error('invalid input/output combination');
  }
  return directionTuple[0] as AntDirection;
}
