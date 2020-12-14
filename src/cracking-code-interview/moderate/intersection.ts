import { makeChangePermutations } from '../recursion/coins';

export interface Point {
  x: number;
  y: number;
}

/*export interface ISegment {
  start: Point;
  end: Point;
}*/

class Segment {
  slope: number;
  yIntercept: number;

  constructor(public start: Point, public end: Point) {
    if (end.x === start.x) {
      this.slope = Number.POSITIVE_INFINITY;
      this.yIntercept = Number.POSITIVE_INFINITY;
    } else {
      this.slope = (end.y - start.y)/(end.x - start.x);
      this.yIntercept = end.y - this.slope * end.x;
    }
  }

  calculateYForX(x: number) {
    return this.slope * x + this.yIntercept; 
  }

  isVertical() {
    return this.slope === Number.POSITIVE_INFINITY;
  }
}

export function lineIntersection(one: Segment, two: Segment) {
  if (one.slope === two.slope) {
    if (one.yIntercept !== two.yIntercept) {
      // they're parallel, but not on the same plane essentially, so they never intercept
      return null;
    }

    // okay, now we gotsta check if these homies are touchin' eachother
    if (inBetween(one.start, one.end, two.start)) {
      return one.end;
    }
    else if (inBetween(one.start, two.end, two.start)) {
      return two.end;
    }
    else if (inBetween(one.end, one.start, two.end)) {
      return one.start;
    }
    else if (inBetween(one.end, two.start, two.end)) {
      return two.start;
    }
  }

  let x: number;
  if (one.isVertical() || two.isVertical()) {
    x = one.isVertical() ? one.start.x : two.start.x;
  } else {
    /*m1x + b1 = m2x + b2
    m1x + b1 - b2 = m2x;
    b1 - b2 = x(m2 - m1)
    x = (b1 - b2) / m2 - m1
    */
   x = (one.yIntercept - two.yIntercept) / (two.slope - one.slope);
  }

  const y = one.isVertical() ? two.calculateYForX(x) : one.calculateYForX(x);
  const interceptionPoint: Point = { x, y};
  if (inBetween(one.start, interceptionPoint, one.end)
    && inBetween(two.start, interceptionPoint, two.end)) {
      return interceptionPoint;
  }

  return null;
}

function inBetween(start: Point, middle: Point, end: Point) {
  return inBetweenNumbers(start.x, middle.x, end.x)
    && inBetweenNumbers(start.y, middle.y, end.y);
}

function inBetweenNumbers(start: number, middle: number, end: number) {
  if (start > end) {
    return end <= middle && middle <= start;
  }
  return start <= middle && middle <= end;
}