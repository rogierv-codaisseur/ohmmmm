window.onload = function() {
  let game = new Phaser.Game(1200, 800, Phaser.CANVAS, 'phaser-example', {
    preload: preload,
    create: create,
    update: update,
    render: render
  });

  function preload() {
    game.load.image('ball', 'assets/ball.png');
  }

  function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#0072bc';

    sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'ball');
    game.physics.enable(sprite, Phaser.Physics.ARCADE);
  }

  function update() {
    if (game.input.mousePointer.isDown) {
      // Set speed to 100 and the maxTime to 30ms.
      game.physics.arcade.moveToPointer(sprite, 100, game.input.activePointer, 30);

      if (Phaser.Rectangle.contains(sprite.body, game.input.x, game.input.y)) {
        sprite.body.velocity.setTo(0, 0);
      }
    } else {
      sprite.body.velocity.setTo(0, 0);
    }
  }

  function render() {
    game.debug.bodyInfo(sprite, 32, 32);
  }
};
