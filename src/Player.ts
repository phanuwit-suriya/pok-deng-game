import { Card } from "./Card";
import { Deck } from "./Deck";

export class Player {
    cards: Card[];

    get cardValue(): number {
        return this.cards.map(a => a.value).reduce((a, b) => a + b) % 10;
    }

    constructor(public username: string, public credit: number = 50) {
        this.username = username;
        this.credit = credit;
        this.cards = [];
    }

    drawCard(deck: Deck) {
        const card: Card | undefined = deck.drawCard();
        if (card) {
            this.cards.push(card);
        }
    }
}