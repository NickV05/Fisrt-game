class Game {
    constructor(){
        this.gameScreen = document.getElementById("game-screen");
        this.player = new Player( this.gameScreen,200,500,100,150,"../images/sonic.png");
        this.bots = [
          new bee(this.gameScreen, 0, 0, 190, 107, "../images/bee.gif"),
          new bug(this.gameScreen, 0, 0, 190, 107, "../images/bug.gif"),
          new crab(this.gameScreen, 0, 0, 180, 150, "../images/crab.gif"),
          new robot(this.gameScreen, 0, 0, 180, 150, "../images/robot.gif"),
          new spikes(this.gameScreen, 0, 0, 90, 100, "../images/spikes.gif")
        ];

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
          const randomIndex = Math.floor(Math.random() * (this.bots.length-1));
          const randomEnemy = this.bots[randomIndex];
          this.enemies.push(new bee(this.gameScreen));
        }
    
        for (let i = 0; i < this.enemies.length; i++) {
          const obstacle = this.enemies[i];
          obstacle.move();
          obstacle.element.style.visibility = 'visible';
          
          
    
      if (this.player.didCollide(obstacle) && this.player.jumping) {
            const delay1 = setTimeout(() => {
            obstacle.element.src = "../images/Explosion.gif"
            const delay2 = setTimeout(() => {
              obstacle.element.remove();
            this.enemies.splice(i, 1);
            }, 500);
          }, 100);
          }

          else if (this.player.didCollide(obstacle) && !this.player.jumping) {
            
            this.player.pushBack(obstacle)
            this.lives--;
            
          
          
          }

          else if (obstacle.left < 0) {
            this.score++;
            obstacle.element.remove();
            this.enemies.splice(i, 1);
            i--;
          }
        }
    
        if (this.lives === 0) {
          this.endGame();
        }
        }
      }

