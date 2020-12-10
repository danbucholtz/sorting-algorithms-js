
export interface Coin {
  name: string;
  value: number;
}

const quarter: Coin = {
  name: 'quarter',
  value: 25,
}

const dime: Coin = {
  name: 'dime',
  value: 10,
}

const nickel: Coin = {
  name: 'nickel',
  value: 5,
}

const penny: Coin = {
  name: 'penny',
  value: 1,
}

export interface ChangePermutation {
  numQuarters: number;
  numDimes: number;
  numNickels: number;
  numPennies: number;
}

export function makeChangePermutations(numCents: number) {
  return makeChangePermutationsInternal(numCents, [quarter, dime, nickel, penny], 0);
}


function makeChangePermutationsInternal(numCents: number, coins: Coin[], coinIndex: number) {
  const coin = coins[coinIndex];
  if (coinIndex === coins.length - 1) {
    const remaining = numCents % coin.value
    return remaining === 0 ? 1 : 0;
  }


  let ways = 0;
  for (let amount = 0; amount <= numCents; amount += coin.value) {
    ways += makeChangePermutationsInternal(numCents - amount, coins, coinIndex + 1);
  }
  return ways;
}
