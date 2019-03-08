import Phaser from 'phaser';

export default (preload, create, update) => {
  return {
    type: Phaser.AUTO,
    pixelArt: true,
    width: 400,
    height: 700,
    parent: 'phaser-game',
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
      disableWebAudio: true
    }
  };
};
