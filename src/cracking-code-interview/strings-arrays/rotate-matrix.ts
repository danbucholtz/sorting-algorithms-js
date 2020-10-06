import { kMaxLength } from 'buffer';

export function rotateMatrix(matrix: string[][]) {
  const height = matrix.length;
  for (let vertIndex = 0; vertIndex < height / 2; vertIndex++) {
    let first = vertIndex;
    let last = height - 1 - vertIndex;
    for (let horIndex = first; horIndex < last; horIndex++) {
      const offset = horIndex - first;

      const topLeft = matrix[first][horIndex];
      const bottomLeft = matrix[last - offset][first];
      const bottomRight = matrix[last][last - offset];
      const topRight = matrix[horIndex][last];

      // bottom left move to top left
      matrix[first][horIndex] = bottomLeft
      
      // bottom right move to bottom left
      matrix[last - offset][first] = bottomRight;

      // top right move to bottom right
      matrix[last][last-offset] = topRight;

      // top left move to top right
      matrix[horIndex][last] = topLeft;
    }
  }
}