export type Rank = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "J" | "Q" | "K";
export type Suite = "hearts" | "spades" | "diamonds" | "clubs";

export const cardValues = {
    A: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 0,
    J: 0,
    Q: 0,
    K: 0,
}

export class Card {
    public rank: Rank;
    public suite: Suite;
    public value: number;

    constructor(rank: Rank, suite: Suite) {
        this.rank = rank;
        this.suite = suite;
        this.value = cardValues[rank];
    }
}