export default class GameLogic {
  constructor() {
  }

  /**
   * Determines whether the player wins, loses or draws against the computer.
   * The three possible return values for this are: Player, Computer or Draw
   */
  determineWinner(playerWeapon, computerWeapon) {
    this.winningOutcomes = {
      Paper: ['Rock', 'Spock'],
      Lizard: ['Paper', 'Spock'],
      Spock: ['Scissors', 'Rock'],
      Rock: ['Scissors', 'Lizard'],
      Scissors: ['Paper', 'Lizard'],
    };

    let winner = '';

    if (playerWeapon === computerWeapon) winner = 'Draw';
    if (this.winningOutcomes[playerWeapon].indexOf(computerWeapon) > -1) winner = 'Player';
    if (this.winningOutcomes[computerWeapon].indexOf(playerWeapon) > -1) winner = 'Computer';

    return winner;
  }
}
