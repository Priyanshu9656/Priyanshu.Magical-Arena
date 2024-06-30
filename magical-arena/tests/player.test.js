import { Player } from "../src/player.js";
import assert from "assert";

function runPlayerTests() {
  console.log("\x1b[33mRunning Player tests...\x1b[0m");
  const player = new Player("Player A", 50, 5, 10);

  assert.strictEqual(player.name, "Player A");
  assert.strictEqual(player.health, 50);
  assert.strictEqual(player.strength, 5);
  assert.strictEqual(player.attackValue, 10);

  const attackRoll = player.attack();
  assert(attackRoll >= 10 && attackRoll <= 60);

  const defendRoll = player.defend();
  assert(defendRoll >= 5 && defendRoll <= 30);

  player.reduceHealth(20);
  assert.strictEqual(player.health, 30);
  assert.strictEqual(player.isAlive(), true);

  player.reduceHealth(30);
  assert.strictEqual(player.health, 0);
  assert.strictEqual(player.isAlive(), false);

  console.log("\x1b[32mAll Player tests passed!\x1b[0m\n");
}

export default runPlayerTests;
