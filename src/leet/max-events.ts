// https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/



export interface Event {
  start: number;
  end: number
};

export function calculateMaxNumberOfEvents(events: Event[]) {
  const set = new Set();
  const ordered = sortEventsInReverseChronologicalOrder(events);
  for (const event of ordered) {
    for (let i = event.start; i <= event.end; i++ ){
      if (!set.has(i)) {
        set.add(i);
        break;
      }
    }
  }
  return set.size;
}

export function sortEventsInReverseChronologicalOrder(events: Event[]) {
  // in the "event" (ba dum tiss) that two events start at the same time, put the one that ends first earlier in the list
  // so it's prioritized
  const sorted = [...events];
  sorted.sort((eventOne, eventTwo) => {
    if (eventOne.end === eventTwo.end) {
      return eventOne.start - eventTwo.start;
    }
    return eventOne.end - eventTwo.end;
  });
  return sorted;
}
