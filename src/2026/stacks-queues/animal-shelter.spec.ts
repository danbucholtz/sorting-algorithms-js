import { describe, expect, it } from 'vitest';
import { AnimalShelterQueue, type Animal } from './animal-shelter';

describe(AnimalShelterQueue.name, () => {
  it('should dequeueAny in overall FIFO arrival order', () => {
    const shelter = new AnimalShelterQueue();
    const dog1: Animal = { id: 'd1', type: 'dog' };
    const cat1: Animal = { id: 'c1', type: 'cat' };
    const dog2: Animal = { id: 'd2', type: 'dog' };

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);

    expect(shelter.dequeueAny()).toEqual(dog1);
    expect(shelter.dequeueAny()).toEqual(cat1);
    expect(shelter.dequeueAny()).toEqual(dog2);
    expect(shelter.dequeueAny()).toBeUndefined();
  });

  it('should dequeueDog using dog-only FIFO order', () => {
    const shelter = new AnimalShelterQueue();
    const dog1: Animal = { id: 'd1', type: 'dog' };
    const cat1: Animal = { id: 'c1', type: 'cat' };
    const dog2: Animal = { id: 'd2', type: 'dog' };

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);

    expect(shelter.dequeueDog()).toEqual(dog1);
    expect(shelter.dequeueDog()).toEqual(dog2);
    expect(shelter.dequeueDog()).toBeUndefined();
    expect(shelter.dequeueAny()).toEqual(cat1);
  });

  it('should dequeueCat using cat-only FIFO order', () => {
    const shelter = new AnimalShelterQueue();
    const cat1: Animal = { id: 'c1', type: 'cat' };
    const dog1: Animal = { id: 'd1', type: 'dog' };
    const cat2: Animal = { id: 'c2', type: 'cat' };

    shelter.enqueue(cat1);
    shelter.enqueue(dog1);
    shelter.enqueue(cat2);

    expect(shelter.dequeueCat()).toEqual(cat1);
    expect(shelter.dequeueCat()).toEqual(cat2);
    expect(shelter.dequeueCat()).toBeUndefined();
    expect(shelter.dequeueAny()).toEqual(dog1);
  });

  it('should return undefined for all dequeues when empty', () => {
    const shelter = new AnimalShelterQueue();

    expect(shelter.dequeueAny()).toBeUndefined();
    expect(shelter.dequeueDog()).toBeUndefined();
    expect(shelter.dequeueCat()).toBeUndefined();
  });

  it('should preserve global order after species-specific dequeues', () => {
    const shelter = new AnimalShelterQueue();
    const dog1: Animal = { id: 'd1', type: 'dog' };
    const cat1: Animal = { id: 'c1', type: 'cat' };
    const dog2: Animal = { id: 'd2', type: 'dog' };
    const cat2: Animal = { id: 'c2', type: 'cat' };

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);
    shelter.enqueue(dog2);
    shelter.enqueue(cat2);

    expect(shelter.dequeueDog()).toEqual(dog1);
    expect(shelter.dequeueAny()).toEqual(cat1);
    expect(shelter.dequeueAny()).toEqual(dog2);
    expect(shelter.dequeueAny()).toEqual(cat2);
  });
});
