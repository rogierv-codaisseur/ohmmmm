import Phaser from 'phaser';

export default () => {

  var config = {
    type: Phaser.AUTO,
    pixelArt: true,
    width: 400,
    height: 700,
    parent: "phaser-game",
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
      preload: preload,
      create: create,
      update: update
    }
  };

  var player;
  var ohms;
  var score = 0;
  var scoreText;
  var timedEvent;
  var timeText;
  var gameOver = false;

  new Phaser.Game(config);

  function preload() {
    this.load.image('stage', 'assets/Stage.png');
    this.load.image('gohm', 'assets/DotGreen.png');
    this.load.image('pohm', 'assets/DotPurple.png');
    this.load.image('oohm', 'assets/DotOrange.png');
    this.load.spritesheet('player', 'assets/Player.png', {
      frameWidth: 150,
      frameHeight: 150
    });
  }

  function create() {

    this.add.image(200, 350, 'stage');

    timeText = this.add.text(300, 0, '', {
      fontSize: '16px',
      fill: '#000'
    });

    timedEvent = this.time.delayedCall(5000, onEvent, [], this);


    player = this.physics.add.sprite(75, 625, 'player').setInteractive();

    this.input.on('pointermove', function (pointer) {
      player.x = pointer.x;
      player.y = pointer.y
    });

    //  Create 10 sprites (they all start life at 0x0)
    ohms = this.physics.add.group({
      key: 'gohm',
      frameQuantity: 10,
      // this scale does not work
      scale: {
        randFloat: [0.5, 1.5]
      }
    });

    var rect = new Phaser.Geom.Rectangle(0, 0, 400, 700);

    //  Randomly position the sprites within the rectangle
    Phaser.Actions.RandomRectangle(ohms.getChildren(), rect);

    scoreText = this.add.text(0, 0, 'score: 0', {
      fontSize: '16px',
      fill: '#000'
    });

    this.physics.add.overlap(player, ohms, collectOhms, null, this);

    function collectOhms(player, ohms) {

      ohms.disableBody(true, true);

      score += 10;
      scoreText.setText('Score: ' + score);

      // if (ohms.countActive(true) === 0) {

      //   return Phaser.Actions.RandomRectangle(ohms.getChildren(), rect);

      // }
    }
  }

  function update() {

    if (gameOver) {
      return;
    }

    timeText.setText('Time: ' + timedEvent.getElapsedSeconds().toString().substr(0, 3));

  }


  function onEvent() {

    this.physics.pause();

    gameOver = true

    let gameOverText = this.add.text(30, 270, 'GOOD JOB!', {
      fontSize: '64px',
      fill: '#000'
    });
  }

}