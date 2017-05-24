import angular from 'angular';

import Game from './components/game';
import GameLogic from './services/gameLogic';

angular.module('rps', [])
  .component('game', {
    template: require('./components/game/game.html'),
    controller: Game
  })
  .service('gameLogic', GameLogic);
