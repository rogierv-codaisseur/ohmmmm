export default game => {
  game.load.image('stage', 'assets/Stage.png');
  game.load.image('star', 'assets/star.png');
  game.load.image('gohm', 'assets/DotGreen.png');
  game.load.image('pohm', 'assets/DotPurple.png');
  game.load.image('oohm', 'assets/DotOrange.png');
  game.load.audio('theme', 'assets/bowl.wav');
  game.load.audio('bell', 'assets/cowbell.wav');
  game.load.audio('endgame', 'assets/endgame.mp3');
  game.load.spritesheet('player', 'assets/BreatheIn3.png', {
    frameWidth: 150,
    frameHeight: 150
  });
};
