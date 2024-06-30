export class Arena {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  Battle() {
    let attacker, defender;


    if (this.player1.health <= this.player2.health) {
      attacker = this.player1;
      defender = this.player2;
    } else {
      attacker = this.player2;
      defender = this.player1;
    }

    while (this.player1.isAlive() && this.player2.isAlive()) {
      const attackDamage = attacker.attack();
      const defendDamage = defender.defend();
      let damage = attackDamage - defendDamage;

      if (damage < 0) {
        damage = 0;
      }

      console.log(
        `Before: ${attacker.name}(${attacker.health}) vs ${defender.name}(${defender.health})`
      );

      defender.reduceHealth(damage);

      
       console.log(
        `${attacker.name} attacks ${defender.name} for ${damage} damage.`
      );
      console.log(
        `After: ${attacker.name}(${attacker.health}) vs ${defender.name}(${defender.health})\n`
      );

      [attacker, defender] = [defender, attacker];
    }

    const winner = this.player1.isAlive() ? this.player1 : this.player2;
    console.log(`${winner.name} wins the battle!`);
  }
}
