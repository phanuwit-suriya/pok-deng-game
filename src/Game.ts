import { Player } from "./Player";
import { Deck } from "./Deck";

export class Game {
    constructor(public players: Player[]) {
        this.players = players;
    }

    play() {
        const deck = new Deck();
        deck.shuffleDeck();

        for (let i = 0; i < 2; i += 1) {
            this.players.forEach((player: Player) => player.drawCard(deck));
        }

        const dealer = this.players[this.players.length - 1];
        const dealerCardValue = dealer.cardValue;

        this.players.slice(0, this.players.length - 1).forEach((player: Player) => {
            if (player.cardValue < dealerCardValue) {
                player.credit -= 5;
                dealer.credit += 5;
            } else if (player.cardValue > dealerCardValue) {
                player.credit += 5;
                dealer.credit -= 5;
            }
        });
    }
}