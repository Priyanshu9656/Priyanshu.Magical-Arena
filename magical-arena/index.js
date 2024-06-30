import { Player } from "./src/player.js";
import { Arena } from "./src/arena.js";

const playerA = new Player("Player A", 75, 15, 110);
const playerB = new Player("Player B", 100, 100, 115);

const arena = new Arena(playerA, playerB);
arena.Battle();
