import Game from './game';
import GameLogic from '../../services/gameLogic';

describe('Game component - ', () => {
  let gameComponent;
  let gameLogic;

  beforeEach(() => {
    gameLogic = new GameLogic();
    gameComponent = new Game(gameLogic)
  });

  it('Instantiates the component successfully', () => {
    expect(gameComponent).toBeDefined();
  });

  it('Starts with the right game state', () => {
    expect(gameComponent.playerWeapon).toBeUndefined();
    expect(gameComponent.computerWeapon).toBeUndefined();
    expect(gameComponent.result).toBeUndefined();
  });

  it('Can select a weapon for the computer', () => {
    expect(gameComponent.computerWeapon).toBeUndefined();

    gameComponent.selectComputerWeapon();

    expect(gameComponent.computerWeapon).toBeDefined();
  });

  it('Can fight a round', () => {
    gameComponent.selectComputerWeapon();

    gameComponent.fight('Rock');

    expect(gameComponent.playerWeapon).toBeDefined();
    expect(gameComponent.computerWeapon).toBeDefined();
    expect(gameComponent.result).toBeDefined();
  });

  it('Can reset the game state', () => {
    gameComponent.selectComputerWeapon();

    gameComponent.fight('Rock');

    expect(gameComponent.playerWeapon).toBeDefined();
    expect(gameComponent.computerWeapon).toBeDefined();
    expect(gameComponent.result).toBeDefined();

    gameComponent.resetGame();

    expect(gameComponent.playerWeapon).toBeUndefined();
    expect(gameComponent.computerWeapon).toBeUndefined();
    expect(gameComponent.result).toBeUndefined();
  });
});
