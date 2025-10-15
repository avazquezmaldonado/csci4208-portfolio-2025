class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, position) {
    super(scene, position.x, position.y, 'enemy');
    this.depth = 2;
    this.speed = Phaser.Math.Between(100, 200);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setVelocityY(this.speed);
  }

  update() {
    if (this.y > 500) {
      this.y = Phaser.Math.Between(-100, -20);
      this.x = Phaser.Math.Between(50, 590);
      this.setVelocityY(this.speed);
    }
  }
}