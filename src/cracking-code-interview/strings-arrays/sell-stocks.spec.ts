import { optimizeStocksForProfit } from './sell-stocks';

describe(optimizeStocksForProfit.name, () => {
  /*it('should do the basics one', () => {
    const input = [100, 180, 260, 310, 40, 535, 695];
    const results = optimizeStocksForProfit(input);
    expect(results.length).toBe(2);
    expect(results[0].localMinIndex).toBe(0);
    expect(results[0].localMaxIndex).toBe(3);
    expect(results[1].localMinIndex).toBe(4);
    expect(results[1].localMaxIndex).toBe(6);
  });
  */

  it('should do the basics two', () => {
    const input = [4, 2, 2, 2, 4];
    const results = optimizeStocksForProfit(input);
    expect(results.length).toBe(1);
    expect(results[0].localMinIndex).toBe(3);
    expect(results[0].localMaxIndex).toBe(4);
  });
})