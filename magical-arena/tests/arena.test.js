import { Player } from "../src/player.js";
import { Arena } from "../src/arena.js";
import assert from "assert";

function runArenaTests() {
  console.log("\x1b[33mRunning Arena tests...\x1b[0m");
  const playerA = new Player("Player A", 50, 5, 10);
  const playerB = new Player("Player B", 100, 10, 5);
  const arena = new Arena(playerA, playerB);

  arena.Battle();

  assert(playerA.isAlive() !== playerB.isAlive());

  console.log("\x1b[32mAll Arena tests passed!\x1b[0m\n");
}

export default runArenaTests;
