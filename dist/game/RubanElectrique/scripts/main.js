import Boot from './Boot.js';
import MainGame from './Game.js';
import EndMenu from './EndMenu.js';

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 600,
      height: 600,
    },
    backgroundColor: '#ffffff',
    scene: [ Boot, MainGame, EndMenu ],
};

let game = new Phaser.Game(config);