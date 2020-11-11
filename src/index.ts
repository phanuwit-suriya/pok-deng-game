import { Deck } from "./Deck";
import { Card } from "./Card";
import { Player } from "./Player";
import * as readline from "readline";
import { Game } from "./Game";

const players = [
    new Player("Player-1"),
    new Player("Player-2"),
];

const game = new Game(players);
game.play();

console.log(players);