import { Rank, Suite, Card } from "./Card";
import { shuffleArray } from "./utils";

const ranks: Rank[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
const suites: Suite[] = ["hearts", "spades", "diamonds", "clubs"];

export class Deck {
    public deck: Card[];

    constructor() {
        this.deck = [];
        this.buildDeck();
    }

    buildDeck() {
        suites.forEach((suite: Suite) => {
            ranks.forEach((rank: Rank) => {
                this.deck.push(new Card(rank, suite));
            })
        })
    }

    drawCard(): Card | undefined {
        return this.deck.pop();
    }

    shuffleDeck(times: number = 1) {
        for (var i = 1; i <= times; i += 1) {
            shuffleArray(this.deck);
        }
    }

    isEmpty(): boolean {
        return this.deck.length === 0;
    }
}
