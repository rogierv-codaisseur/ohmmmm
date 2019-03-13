import Phaser from 'phaser';

export default (preload, create, update) => {
  return {
    type: Phaser.AUTO,
    pixelArt: false,
    scale: {
      parent: 'phaser-game',
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 400,
      height: 700
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 0
        },
        debug: false
      }
    },
    scene: {
      preload,
      create,
      update
    },
    audio: {
      disableWebAudio: false
    }
  };
};
