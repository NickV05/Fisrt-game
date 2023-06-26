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
        this.spikes = new Spikes(
          this.gameScreen,
          200,
          500,
          100,
          150,
          "../images/spikes.png"
        )
        this.gameIsOver = false;
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
        }
      }

