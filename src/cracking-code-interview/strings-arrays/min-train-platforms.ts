// https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1

export interface TrainSchedule {
  arrival: number;
  departure: number;
}
export function minTrainPlatforms(input: TrainSchedule[]) {
  return minTrainPlatformsOptimal(input);
  // return minTrainPlatformsSimple(input);
}

function minTrainPlatformsOptimal(input: TrainSchedule[]) {
  input.sort((one, two) => {
    return one.arrival - two.arrival;
  });
  const arrivals = input.map(input => input.arrival);
  const depatures = input.map(input => input.departure);
  let maxPlatformsNeeded = 1;
  let currentPlatformsNeeded = 1;
  let i = 1;
  let j = 0;
  while (i < input.length && j < input.length) {
    // if the next event is an arrival, we need to increment the num platforms needed
    if (arrivals[i] <= depatures[j]) {
      currentPlatformsNeeded++;
      i++;
    } else if (arrivals[i] > depatures[j]) {
      // the next event is a departure, so decrement the currentPlatformsNeeded
      currentPlatformsNeeded--;
      j++;
    }
    if (currentPlatformsNeeded > maxPlatformsNeeded) {
      maxPlatformsNeeded = currentPlatformsNeeded;
    }
  }
  return maxPlatformsNeeded;
}

function minTrainPlatformsSimple(input: TrainSchedule[]) {
  let globalMaxOverlappingTrains = 0;
  for (let i = 0; i < input.length; i++) {
    const scheduleOne = input[i];
    let numTrainsOverlap = 0;
    for (let j = 0; j < input.length; j++) {
      const scheduleTwo = input[j];
      if (scheduleOne !== scheduleTwo && doOverlap(scheduleOne, scheduleTwo)) {
        numTrainsOverlap++;
      }
    }
    globalMaxOverlappingTrains = Math.max(globalMaxOverlappingTrains, numTrainsOverlap);
  }
  return globalMaxOverlappingTrains + 1; // you always need at least 1 platform
}


function doOverlap(one: TrainSchedule, two: TrainSchedule) {
  // one arrives, two arrives before one departs
  if (one.arrival <= two.arrival && two.arrival <= one.departure) {
    return true;
  }
  // two arrives, one arrives before two departs
  if (two.arrival <= one.arrival && one.arrival <= two.departure) {
    return true;
  }

  // two departs while one is present
  if (one.arrival <= two.departure && one.departure >= two.departure) {
    return true;
  }

  // one departs while two is present
  if (two.arrival <= one.departure && two.departure >= one.departure) {
    return true;
  }

  return false;
  
}