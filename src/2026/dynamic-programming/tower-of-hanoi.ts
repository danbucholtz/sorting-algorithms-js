export interface HanoiMove {
  fromPeg: string;
  toPeg: string;
}

export function towerOfHanoi(
  numDisks: number,
  sourcePeg = 'A',
  targetPeg = 'C',
  auxiliaryPeg = 'B',
): HanoiMove[] {
  const source: number[] = [];
  const target: number[] = [];
  const helper: number[] = [];
  for (let i = numDisks; i > 0; i--) {
    source.push(i);
  }

  const moves: HanoiMove[] = [];

  move(numDisks, source, sourcePeg, target, targetPeg, helper, auxiliaryPeg, moves);

  return moves;
}

function move(
  n: number,
  source: number[],
  sourceName: string,
  dest: number[],
  destName: string,
  buffer: number[],
  bufferName: string,
  moves: HanoiMove[],
) {
  if (n === 0) {
    return;
  }

  move(n - 1, source, sourceName, buffer, bufferName, dest, destName, moves);
  moveDisk(source, dest, sourceName, destName, moves);
  move(n - 1, buffer, bufferName, dest, destName, source, sourceName, moves);
}

function moveDisk(
  source: number[],
  dest: number[],
  sourceName: string,
  destName: string,
  moves: HanoiMove[],
) {
  const toMove = source.pop();
  if (!toMove) {
    throw new Error(`The source peg is empty, we cannot move a disk`);
  }

  const topDisk = dest[dest.length - 1];
  if (toMove > topDisk) {
    throw new Error(`We cannot move a bigger disk on top of a smaller disk, invalid move`);
  }

  dest.push(toMove);

  moves.push({
    fromPeg: sourceName,
    toPeg: destName,
  });
}
