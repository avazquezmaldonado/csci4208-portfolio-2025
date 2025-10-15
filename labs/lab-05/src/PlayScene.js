class PlayScene extends Phaser.Scene {
  constructor() {
    super('play');
  }

  preload() {
    this.load.path = 'assets/';
    this.load.image('background', 'background.png');
    this.load.image('player', 'player.png');
    this.load.image('enemy', 'enemy.png');
  }

  create() {
    this.create_map();
    this.create_player();
    this.create_enemies();
  }

  update() {
    this.update_player();
    this.update_enemies();
  }

  // === Helper Methods ===
  create_map() {
    this.add.image(640/2, 480/2, 'background');
  }

  create_player() {
    this.player = new Player(this);
  }

  update_player() {
    this.player.move();
  }

  create_enemies() {
    this.enemies = [];
    for (let i = 0; i < 5; i++) {
      let x = Phaser.Math.Between(50, 590);
      let y = Phaser.Math.Between(-100, -20);
      let enemy = new Enemy(this, {x, y});
      this.physics.add.existing(enemy);
      this.enemies.push(enemy);
    }

    // Add collision detection between player and enemies
    this.physics.add.collider(this.player, this.enemies, () => {
      this.scene.restart(); // Game Over → restart scene
    });
  }

  update_enemies() {
    this.enemies.forEach(enemy => {
      enemy.update();
    });
  }
}