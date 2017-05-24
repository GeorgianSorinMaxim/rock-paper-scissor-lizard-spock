import GameLogic from './gameLogic';

describe('Game logic service', () => {
  let gameLogic;

  beforeEach(() => {
    gameLogic = new GameLogic();
  });

  it('Tests the game logic', () => {
    [
      { player: 'Rock', computer: 'Rock', winner: 'Draw' },
      { player: 'Paper', computer: 'Paper', winner: 'Draw' },
      { player: 'Spock', computer: 'Spock', winner: 'Draw' },
      { player: 'Lizard', computer: 'Lizard', winner: 'Draw' },
      { player: 'Scissors', computer: 'Scissors', winner: 'Draw' },
      { player: 'Paper', computer: 'Rock', winner: 'Player' },
      { player: 'Paper', computer: 'Spock', winner: 'Player' },
      { player: 'Scissors', computer: 'Paper', winner: 'Player' },
      { player: 'Scissors', computer: 'Lizard', winner: 'Player' },
      { player: 'Rock', computer: 'Scissors', winner: 'Player' },
      { player: 'Rock', computer: 'Lizard', winner: 'Player' },
      { player: 'Lizard', computer: 'Paper', winner: 'Player' },
      { player: 'Lizard', computer: 'Spock', winner: 'Player' },
      { player: 'Spock', computer: 'Scissors', winner: 'Player' },
      { player: 'Spock', computer: 'Rock', winner: 'Player' },
      { player: 'Rock', computer: 'Paper', winner: 'Computer' },
      { player: 'Spock', computer: 'Paper', winner: 'Computer' },
      { player: 'Paper', computer: 'Scissors', winner: 'Computer' },
      { player: 'Lizard', computer: 'Scissors', winner: 'Computer' },
      { player: 'Scissors', computer: 'Rock', winner: 'Computer' },
      { player: 'Lizard', computer: 'Rock', winner: 'Computer' },
      { player: 'Paper', computer: 'Lizard', winner: 'Computer' },
      { player: 'Spock', computer: 'Lizard', winner: 'Computer' },
      { player: 'Scissors', computer: 'Spock', winner: 'Computer' },
      { player: 'Rock', computer: 'Spock', winner: 'Computer' },
    ].forEach((outcome) => {
      expect(gameLogic.determineWinner(outcome.player, outcome.computer)).toBe(outcome.winner);
    });
  });
});
