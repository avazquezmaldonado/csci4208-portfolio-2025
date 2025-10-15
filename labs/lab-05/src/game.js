// Phaser game configuration
const config = new Object();

config.width   = 640;                  // Game width
config.height  = 480;                  // Game height
config.scene   = [ PlayScene ];        // Our scene
config.physics = { default: 'arcade' };// Enable Arcade Physics

// Start Phaser game
const game = new Phaser.Game(config);