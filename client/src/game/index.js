import Phaser from 'phaser';
import updateGame from './update';
import configGame from './config';
import preloadGame from './preload';
import createGame from './create';

export default timeInSec => {
  const config = configGame(preload, create, update);

  var player;
  var gohms;
  var pohms;
  var oohms;
  var score = 0;
  var scoreText;
  var timedEvent;
  var regenOhms;
  var timeText;
  let speed = 0;
  let speedText;
  var flyingOhms;

  new Phaser.Game(config);

  function preload() {
    preloadGame(this);
  }

  flyingOhms = new Phaser.Class({
    Extends: Phaser.Physics.Arcade.Sprite,

    initialize: function flyingOhms(scene, x, y, width, height, speed, ohm) {
      Phaser.Physics.Arcade.Sprite.call(this, scene, x, y, ohm);

      //  This is the path the sprite will follow
      this.path = new Phaser.Curves.Ellipse(x, y, width, height);
      this.pathIndex = 0;
      this.pathSpeed = speed;
      this.pathVector = new Phaser.Math.Vector2();

      this.path.getPoint(0, this.pathVector);

      this.setPosition(this.pathVector.x, this.pathVector.y);
    },

    preUpdate: function(time, delta) {
      this.anims.update(time, delta);

      this.path.getPoint(this.pathIndex, this.pathVector);

      this.setPosition(this.pathVector.x, this.pathVector.y);

      this.pathIndex = Phaser.Math.Wrap(this.pathIndex + this.pathSpeed, 0, 1);
    }
  });

  function create() {
    createGame(this);
    // add background image
    // this.add.image(200, 350, 'stage');

    scoreText = this.add
      .text(0, 0, '', {
        fontSize: '16px',
        fill: '#000'
      })
      .setDepth(3);

    speedText = this.add
      .text(160, 0, '', {
        fontSize: '16px',
        fill: '#000'
      })
      .setDepth(3);

    // add timer text to canvas
    timeText = this.add
      .text(300, 0, '', {
        fontSize: '16px',
        fill: '#000'
      })
      .setDepth(3);

    // create timer - set time in ms
    timedEvent = this.time.delayedCall(timeInSec * 1000, onEvent, [], this);

    // create ohm regen - set time in ms
    regenOhms = this.time.addEvent({ delay: 0, callback: generateOrangeOhms, callbackScope: this, loop: false });
    regenOhms = this.time.addEvent({ delay: 10000, callback: generateGreenOhms, callbackScope: this, loop: true });
    regenOhms = this.time.addEvent({ delay: 20000, callback: generatePurpleOhms, callbackScope: this, loop: true });
    regenOhms = this.time.addEvent({ delay: 30000, callback: generateOrangeOhms, callbackScope: this, loop: true });

    this.anims.create({
      key: 'breath',
      frames: [
        { key: 'player120' },
        { key: 'player130' },
        { key: 'player140' },
        { key: 'player150', duration: 2000 },
        { key: 'player140' },
        { key: 'player130' },
        { key: 'player120', duration: 2000 }
      ],
      frameRate: 8,
      repeat: -1
    });

    // create player
    player = this.physics.add
      .sprite(75, 625, 'player150')
      .setCircle(40)
      .setDepth(2)
      .setInteractive()
      .play('breath');

    // define player movements
    this.input.on('pointermove', function(pointer) {
      player.x = pointer.x;
      player.y = pointer.y;
      speed = Math.round(parseInt(Math.sqrt(Math.abs(pointer.velocity.x) ** 2 + Math.abs(pointer.velocity.y) ** 2)));
      if (speed > 10) {
        score -= 1;
      }
    });

    //  Create 5 GREEN ohms
    gohms = this.physics.add.group({
      key: 'gohm',
      repeat: 1,
      setXY: { x: 75, y: 625 }
      // frameQuantity: 5,
    });

    //  Create 5 PURPLE ohms
    pohms = this.physics.add.group({
      key: 'pohm',
      setXY: { x: 75, y: 625 }
      // frameQuantity: 5,
    });

    //  Create 5 ORANGE ohms
    oohms = this.physics.add.group({
      key: 'oohm',
      setXY: { x: 75, y: 625 }
      // frameQuantity: 5,
    });

    //  x, y = center of the path
    //  width, height = size of the elliptical path
    //  speed = speed the sprite moves along the path per frame
    function generateGreenOhms() {
      for (var x = 0; x < 5; x++) {
        gohms.add(
          new flyingOhms(
            this,
            Phaser.Math.FloatBetween(20, 380),
            Phaser.Math.FloatBetween(20, 680),
            5,
            5,
            0.01,
            'gohm'
          ),
          true
        );
      }
    }

    function generatePurpleOhms() {
      for (var y = 0; y < 5; y++) {
        pohms.add(
          new flyingOhms(
            this,
            Phaser.Math.FloatBetween(20, 380),
            Phaser.Math.FloatBetween(20, 680),
            4,
            4,
            0.012,
            'pohm'
          ),
          true
        );
      }
    }

    function generateOrangeOhms() {
      for (var z = 0; z < 5; z++) {
        oohms.add(
          new flyingOhms(
            this,
            Phaser.Math.FloatBetween(20, 380),
            Phaser.Math.FloatBetween(20, 680),
            3,
            3,
            0.015,
            'oohm'
          ),
          true
        );
      }
    }

    // add score text
    scoreText = this.add.text(0, 0, 'score: 0', {
      fontSize: '16px',
      fill: '#000'
    });

    // set up overlap to trigger the scoring
    this.physics.add.overlap(player, gohms, collectGohms, null, this);
    this.physics.add.overlap(player, pohms, collectPohms, null, this);
    this.physics.add.overlap(player, oohms, collectOohms, null, this);

    // collect GREEN ohms
    function collectGohms(player, gohms) {
      gohms.disableBody(true, true);

      score += 10;
      scoreText.setText('ohms: ' + score);
    }

    // collect PURPLE ohms
    function collectPohms(player, pohms) {
      pohms.disableBody(true, true);

      score += 10;
      scoreText.setText('ohms: ' + score);
    }

    // collect ORANGE ohms
    function collectOohms(player, oohms) {
      oohms.disableBody(true, true);

      score += 10;
      scoreText.setText('ohms: ' + score);
    }
  }

  function update() {
    updateGame(scoreText, score, speedText, speed, timeText, timedEvent);
  }

  function onEvent() {
    // pauses the game when timer runs out
    this.physics.pause();

    // set gameOver to false, even though this does nothing yet
    // gameOver = true;

    // pop up text when timer runs out
    var gameOverText = this.add.text(30, 270, 'GOOD JOB!', {
      fontSize: '64px',
      fill: '#000'
    });
  }
};
