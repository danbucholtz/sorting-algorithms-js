export type ContainerHeights = number[];

export function maxArea(heights: ContainerHeights): number {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;
  while (left <= right) {
    const leftHeight = heights[left];
    const rightHeight = heights[right];
    const lowerHeight = Math.min(leftHeight, rightHeight);
    const widthDelta = right - left;
    const newArea = lowerHeight * widthDelta;
    if (newArea > maxArea) {
      maxArea = newArea;
    }
    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
