

class Call {
  constructor(private rank: Rank) {
  }

  getRank() {
    return this.rank;
  }

  escalate() {
    if (this.rank === Rank.RESPONDANT) {
      this.rank = Rank.MANAGER;
    } else if (this.rank === Rank.MANAGER) {
      this.rank = Rank.DIRECTOR;
    }
  }
}

class CallQueue {
  array: Call[];

  enqueue(call: Call) {
    this.array.push(call);
  }

  dequeue() {
    if (this.array.length === 0) {
      throw new Error('empty array');  
    }
    const top = this.array.shift();
    return top;
  }
}

abstract class Employee {
  free: boolean = true;
  rank: Rank;

  markAsFree() {
    this.free = true;
  }

  markAsBusy() {
    this.free = false;
  }

  isFree() {
    return this.free;
  }

  canHandleCall(call: Call) {
    return call.getRank() === this.rank;
  }
}

class Respondant extends Employee {
  constructor() {
    super();
    this.rank = Rank.RESPONDANT;
  }
}

class Manager extends Employee {
  constructor() {
    super();
    this.rank = Rank.MANAGER;
  }
}

class Director extends Employee {
  constructor() {
    super();
    this.rank = Rank.DIRECTOR;
  }
}

class CallCenter {

  respondantQueue = new CallQueue();
  managerQueue = new CallQueue();
  directorQueue = new CallQueue();

  constructor(private respondants: Respondant[], private managers: Manager[], private directors: Director[]) {
  }

  dispatchCall(call: Call) {

  }
}



enum Rank {
  RESPONDANT = 'respondant',
  MANAGER = 'manager',
  DIRECTOR = 'director',
}