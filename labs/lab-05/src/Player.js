class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene) {
    super(scene, 300, 400, 'player');
    this.depth = 2;
    this.speed = 200;

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);

    this.buttons = scene.input.keyboard.addKeys('up,down,left,right');
  }

  move() {
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

    if (this.buttons.up.isDown) this.body.velocity.y = -this.speed;
    if (this.buttons.down.isDown) this.body.velocity.y = this.speed;
    if (this.buttons.left.isDown) this.body.velocity.x = -this.speed;
    if (this.buttons.right.isDown) this.body.velocity.x = this.speed;
  }
}