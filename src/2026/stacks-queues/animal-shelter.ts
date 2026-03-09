import { Queue } from './queue';
export type AnimalType = 'dog' | 'cat';

export interface Animal {
  id: string;
  type: AnimalType;
}

export type QueuedObject = {
  animal: Animal;
  timestamp: number;
};

export class AnimalShelterQueue {
  private dogQueue = new Queue<QueuedObject>();
  private catQueue = new Queue<QueuedObject>();
  private counter = 0;

  enqueue(animal: Animal): void {
    this.counter++;
    if (animal.type === 'cat') {
      this.catQueue.enqueue({
        animal,
        timestamp: this.counter,
      });
    } else {
      this.dogQueue.enqueue({
        animal,
        timestamp: this.counter,
      });
    }
  }

  dequeueAny(): Animal | undefined {
    const cat = this.catQueue.peek();
    const dog = this.dogQueue.peek();
    if (!cat) {
      const dogRecord = this.dogQueue.dequeue();
      return dogRecord?.animal;
    }
    if (!dog) {
      const catRecord = this.catQueue.dequeue();
      return catRecord?.animal;
    }
    const olderRecord =
      cat.timestamp < dog.timestamp ? this.catQueue.dequeue() : this.dogQueue.dequeue();
    return olderRecord?.animal;
  }

  dequeueDog(): Animal | undefined {
    const object = this.dogQueue.dequeue();
    return object?.animal;
  }

  dequeueCat(): Animal | undefined {
    const object = this.catQueue.dequeue();
    return object?.animal;
  }
}
