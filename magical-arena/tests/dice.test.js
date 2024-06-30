import { Dice } from "../src/dice.js";
import assert from "assert";

function runDiceTests() {
  console.log("\x1b[33mRunning Dice tests...\x1b[0m");
  for (let i = 0; i < 100; i++) {
    const roll = Dice.roll();
    assert(roll >= 1 && roll <= 6);
  }

  console.log("\x1b[32mAll Dice tests passed!\x1b[0m\n");
}

export default runDiceTests;
