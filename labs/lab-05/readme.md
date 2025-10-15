# Lab 05 – Phaser Dodger Game

### What I Built
In this lab, I created a simple 2D game using the Phaser framework. The goal of the game is for the player character to dodge falling enemies while collecting points. The player moves left and right, and the game ends when the player collides with an enemy. The lab helped me understand how to use a game loop, update physics, and manage different game objects in Phaser.

### What Was Tricky
The most challenging part was learning how Phaser manages physics and collisions. It took some time to understand how to spawn enemies at random intervals and make their movement smooth. Another tricky part was organizing the code between the different classes and files (like `Player.js`, `Enemy.js`, and `PlayScene.js`) so that everything worked together properly.

### What I Would Improve
If I were to improve the game, I would:
- Add background music and sound effects for collisions and score increases.  
- Include a difficulty system where enemies move faster over time.  
- Display a score counter and a game-over screen with restart functionality.  
- Make the player movement smoother and more responsive.

### Reflection
This lab gave me a good introduction to building games with a JavaScript framework and helped me understand real-time rendering and game state management. It also showed me how a game engine handles animation, physics, and input all within a single update loop.