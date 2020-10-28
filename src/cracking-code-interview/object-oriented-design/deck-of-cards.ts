import { isAccessor } from 'typescript';


enum Suit {
  DIAMOND = 'diamond',
  HEART = 'heart',
  SPADE = 'spade',
  CLUB = 'club',
}

abstract class Card {
  available = true;

  constructor(protected faceValue: number, protected suit: Suit) {
  }

  markAvailable() {
    this.available = true;
  }

  markUnavaiable() {
    this.available = false;
  }

  isAvailable() {
    return this.available;
  }

  abstract getValue(): number;
}

abstract class Hand<T extends Card> {
  cards: T[] = [];

  addCard(card: T) {
    this.cards.push(card);
  }

  abstract getScore(): number;

}

class BlackJackCard extends Card {

  getValue() {
    if (this.isAce()) {
      return 11;
    } else if (this.isFaceCard()) {
      return 10;
    }
    return this.faceValue;
  }

  getMaxValue() {
    return this.getValue();
  }

  getMinValue() {
    if (this.isAce()) {
      return 1;
    }
    return this.getValue();
  }

  isAce() {
    return this.faceValue === 1;
  }

  isFaceCard() {
    return this.faceValue >= 10 && this.faceValue <= 12;
  }
}

class BlackJackHand extends Hand<BlackJackCard> {
  
  getScore(): number {
    const possibleScores = this.getPossibleScores();
    let highestUnderTwentyOne = 0;
    let lowestOverTwentyOne = 0;
    for (const score of possibleScores) {
      if (score > 21 && score < lowestOverTwentyOne) {
        lowestOverTwentyOne = score;
      } else if (score <= 21 && score > highestUnderTwentyOne) {
        highestUnderTwentyOne = score;
      }
    }
    if (highestUnderTwentyOne !== 0) {
      return highestUnderTwentyOne;
    }
    return lowestOverTwentyOne;
  }

  isBust() {
    return this.getScore() > 21;
  }

  isBlackJack() {
    return this.cards.length === 2 && this.getScore() === 21;
  }

  isTwentyOne() {
    return this.getScore() === 21;
  }

  getPossibleScores(): Set<number> {
    // TODO - the more robust calculation that looks at each permutation wrt aces

    // for now, just do the simple thing since this is just a test problem
    // calculate two numbers per card
    let minValue = 0;
    let maxValue = 0;
    const set: Set<number> = new Set();
    for (const card of this.cards) {
      minValue += card.getMinValue();
      maxValue += card.getMaxValue();
    }
    set.add(minValue);
    set.add(maxValue);
    return set;
  }
}