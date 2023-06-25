class Game {
    constructor(){
        this.gameScreen = document.getElementById("game-screen");
        this.player = new Player(
          this.gameScreen,
          200,
          500,
          100,
          150,
        );
        this.gameIsOver = false;
      }
      start() {
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.width}px`;
        this.gameLoop();
      }
      gameLoop() {
        console.log("game loop")
        if (this.gameIsOver) {
          return;
        }
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
      }
      
      update() {
        console.log("in the update");
        this.player.move();
        }
      }

