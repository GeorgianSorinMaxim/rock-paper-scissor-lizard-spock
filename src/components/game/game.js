export default class Game {
  constructor(gameLogic) {
    this.gameLogic = gameLogic;

    this.availableWeapons = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];

    this.playerWeapon = undefined;
    this.computerWeapon = undefined;

    this.result = undefined;
  }

  /**
   * Sets the player-chosen weapon, randomly selects a weapon for the computer and
   * determines the winner of the rock-paper-scissors battle.
   */
  fight(weapon) {
    this.playerWeapon = weapon;
    this.selectComputerWeapon();
    this.result = this.gameLogic.determineWinner(this.playerWeapon, this.computerWeapon);
  }

  /**
   * Randomly selects a weapon for the computer.
   */
  selectComputerWeapon() {
    this.computerWeapon = this.availableWeapons[Math.floor(Math.random() * this.availableWeapons.length)];
  }

  /**
   * Resets the game state for a new round.
   */
  resetGame() {
    this.playerWeapon = undefined;
    this.computerWeapon = undefined;

    this.result = undefined;
  }
}
