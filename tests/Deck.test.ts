import { Card } from '../src/Card';
import { Deck } from '../src/Deck';

describe('Deck', () => {

  it('instantiates a deck of card with 52 cards', () => {
    const deck = new Deck();
    expect(deck.deck.length).toEqual(52);
  });

  it('has a shuffle function', () => {
    const deck = new Deck();
    const deckBeforeShuffle = deck.deck.slice();
    deck.shuffleDeck();
    expect(deck.deck).not.toEqual(deckBeforeShuffle);
  })

  it('allows to draw cards from the deck', () => {
    const deck = new Deck();
    const card = deck.drawCard();
    expect(card).toBeInstanceOf(Card);
  });
});