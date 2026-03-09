export function rotateMatrix(matrix: unknown[][]) {
  const maxLayers = Math.ceil(matrix.length / 2);

  for (let layer = 0; layer < maxLayers; layer++) {
    const last = matrix.length - 1 - layer;
    for (let i = layer; i < matrix.length - layer - 1; i++) {
      const offset = i - layer;
      const topValue = matrix[layer][i];
      const rightValue = matrix[i][last];
      const bottomValue = matrix[last][last - offset];
      const leftValue = matrix[last - offset][layer];

      // update right cell
      matrix[i][last] = topValue;

      // update bottom cell
      matrix[last][last - offset] = rightValue;

      // update left cell
      matrix[last - offset][layer] = bottomValue;

      // update top cell
      matrix[layer][i] = leftValue;
    }
  }
}

// layer = 1, i = 2
// h moves from (1, 2) to (2, 3)
// n moves from (2, 3) to (3, 2)
// r moves from (3, 2) to (2, 1)
// l moves from (2, 1) to (1, 2)

// input (1 layer)
// a b
// c d

// input (2 layers)
// a b c
// d e f
// g h i

// input (2 layers)
// a b c d
// e f g h
// i j k l
// m n o p

// output
// m i e a
// n j f b
// o k g c
// p l h d

// input (3 layers)
// a b c d e
// f g h i j
// k l m n o
// p q r s t
// u v w x y
