import { Dice } from "./dice.js";

export class Player {
  constructor(name, health, strength, attack) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attackValue = attack;
  }

  isAlive() {
    return this.health > 0;
  }

  attack() {
    const attackRoll = Dice.roll();
    return this.attackValue * attackRoll;
  }

  defend() {
    const defendRoll = Dice.roll();
    return this.strength * defendRoll;
  }

  reduceHealth(damage) {
    this.health = Math.max(this.health - damage, 0);
  }
}
