import { Tower } from './tower-of-hanoi';

describe('tower of hanoi', () => {
  it('should take the tower from the source to the destination', () => {
    const source = new Tower('source');
    source.add(5);
    source.add(4);
    source.add(3);
    source.add(2);
    source.add(1);

    const sourceHeight = source.height();

    const buffer = new Tower('buffer');
    const destination = new Tower('destination');

    source.moveDisks(5, destination, buffer);

    expect(source.height()).toBe(0);
    expect(buffer.height()).toBe(0);
    expect(destination.height()).toBe(sourceHeight);
  });
})