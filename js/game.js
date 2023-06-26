class Game {
    constructor(){
        this.gameScreen = document.getElementById("game-screen");
        this.player = new Player(
          this.gameScreen,
          200,
          500,
          100,
          150,
          "../images/sonic.png"
        );
        this.gameIsOver = false;
        this.enemies = [];
      }
      start() {
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.width}px`;
        this.gameLoop();
      }
      gameLoop() {
        if (this.gameIsOver) {
          return;
        }
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
      }
      
      update() {
        console.log("in the update");
        
        this.player.move();
        if (Math.random() > 0.98 && this.enemies.length < 1) {
          this.enemies.push(new Enemy(this.gameScreen));
        }

        for (let i = 0; i < this.enemies.length; i++) {
          const obstacle = this.enemies[i];
          obstacle.move();
    
          if (this.player.didCollide(obstacle)) {
            obstacle.element.remove();
            this.enemies.splice(i, 1);
            this.lives--;
            i--;
          }
          else if (obstacle.left > this.height) {
            // Increase the score by 1
            this.score++;
            // Remove the obstacle from the DOM
            obstacle.element.remove();
            // Remove obstacle object from the array
            this.enemies.splice(i, 1);
            // Update the counter variable to account for the removed obstacle
            i--;
          }
        }
    
        // If the lives are 0, end the game
        if (this.lives === 0) {
          this.endGame();
        }
        }
      }

