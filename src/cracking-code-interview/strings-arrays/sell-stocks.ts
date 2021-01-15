// https://practice.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1

interface LocalMinMaxIndex {
  localMinIndex: number;
  localMaxIndex: number;
}

export function optimizeStocksForProfit(input: number[]) {
  const chunks: LocalMinMaxIndex[] = [];
  let localMinIndex = 0;
  let localMaxIndex = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] <= input[localMinIndex]) {
      if (i !== 0 && i !== input.length - 1 && localMaxIndex !== localMinIndex) {
        chunks.push({
          localMaxIndex,
          localMinIndex,
        })
      }
      localMinIndex = i;
      localMaxIndex = i;
    }
    if (input[i] > input[localMaxIndex]) {
      // new local max
      localMaxIndex = i;
    }
    if (i === input.length - 1 && localMaxIndex !== localMinIndex) {
      chunks.push({
        localMaxIndex,
        localMinIndex,
      })
    }
  }

  return chunks;
}
