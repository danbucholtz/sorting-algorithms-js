import { twoSum } from '../../leet/two-sum';


export function numberSwapper(obj: { one: number, two: number}) {
  // one is 6, two is 2
  obj.one = obj.one - obj.two; // one is 4
  obj.two = obj.one + obj.two; // two is 6
  obj.one = obj.two - obj.one; // one is 2
  return obj;
}