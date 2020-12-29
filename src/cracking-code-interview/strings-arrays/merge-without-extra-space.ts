

export function mergeWithoutExtraSpaceOptimal(one: number[], two: number[]) {
  
  // [1, 3]
  // [0, 2]
  for (let twoIndex = two.length - 1; twoIndex >= 0; twoIndex--) {
    const oneLast = one[one.length - 1]; // 3
    let oneIndex = 0;
    
    /* Find the smallest element greater than two[i]. Move all 
               elements one position ahead till the smallest greater 
               element is not found */
    for (oneIndex = one.length - 2; oneIndex >= 0 && one[oneIndex] > two[twoIndex]; oneIndex--) { //
      one[oneIndex + 1] = one[oneIndex];
    }

    if (oneIndex != one.length - 2 || oneLast > two[twoIndex]) {
      one[oneIndex + 1] = two[twoIndex];
      two[twoIndex] = oneLast;
    }
  }
}

/* initial
oneLast = 3
  // [1, 3]
  // [0, 2]

// after one outer loop iteration, we have this (twoIndex = 1)
/*
[1, 2]
[0, 3]
*/

// twoIndex = 0
// oneLast is now 2,
/*
[0, 1]
[2, 3]
*/
