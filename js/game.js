class Game {
    constructor(){
        this.gameScreen = document.getElementById("game-screen");
        this.player = new Player( this.gameScreen,200,500,100,150,"../images/sonic.png");
        this.bots = [
          new bee(this.gameScreen, 0, 0, 190, 107, "../images/bee.gif"),
          new bug(this.gameScreen, 0, 0, 190, 107, "../images/bug.gif"),
          new crab(this.gameScreen, 0, 0, 180, 150, "../images/crab.gif"),
          new robot(this.gameScreen, 0, 0, 180, 150, "../images/robot.gif"),
        ];

        this.gameIsOver = false;
        this.enemies = [];
        this.hp = document.createElement("img");
        this.gameScreen.appendChild(this.hp);
        this.hp.src = "../images/sonicHP.jpg";
        this.hp.width = 150;
        this.hp.height = 100;
        this.hp.style.position = "absolute";
        this.hp.style.left = "1330px" ;
        this.hp.style.top = "45px" ;
        this.hpoints = 5; 
        this.lives = document.createElement("h3");
        this.gameScreen.appendChild(this.lives);
        this.lives.textContent = `${this.hpoints}`;
        this.lives.style.position = "absolute";
        this.lives.style.left = "1390px";
        this.lives.style.top = "0px";
        this.lives.style.fontSize = "60px";
        this.lives.style.color = "white";
        this.lives.style.fontFamily = "Monospace";
        this.lives.style.fontWeight = "bold";
        this.audioExplosion = document.createElement("audio");
        this.audioExplosion.src = "../audio/explos.WAV"
        this.audioFail = document.createElement("audio");
        this.audioFail.src = "../audio/gameOver.mp3"
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

      endGame(){

        this.gameIsOver = true;
        this.gameOv = document.createElement("img");
        this.gameScreen.appendChild(this.gameOv);
        this.gameOv.src = "../images/gameOver.jpg";
        this.gameOv.style.position = "absolute";
        this.gameOv.style.left = "500px";
        this.gameOv.style.top = "200px";
        this.gameOv.width = 450;
        this.gameOv.height = 300;
        this.gameOv.style.border = "solid";
        this.gameOv.style.borderColor = "yellow";
        this.audioFail.play();
        audio1.pause();


      }
      

      update() {
        console.log("in the update");
        this.player.move();
        if (Math.random() > 0.98 && this.enemies.length < 1) {
          const randomIndex = Math.floor(Math.random() * (this.bots.length-1));
          const randomEnemy = this.bots[randomIndex];
          this.enemies.push(new bug(this.gameScreen));
        }
    
        for (let i = 0; i < this.enemies.length; i++) {
          const obstacle = this.enemies[i];
          obstacle.move();
          obstacle.element.style.visibility = 'visible';
          
          
    
      if (this.player.didCollide(obstacle) && this.player.jumping) {
                
                this.imag = document.createElement("img");
                this.gameScreen.appendChild(this.imag);
                this.imag.src = "../images/Explosion.gif";
                this.imag.width = obstacle.width;
                this.imag.height = obstacle.height;
                this.imag.style.position = "absolute";
                const obstacleRect = obstacle.element.getBoundingClientRect();
                this.imag.style.left = `${obstacleRect.left}px`;
                this.imag.style.top = `${obstacleRect.top}px`;
                obstacle.element.remove();
                this.audioExplosion.play();
                this.enemies.splice(i, 1);
                const delay4 = setTimeout(() => { 
                  this.imag.remove();
                    },500)
                
            
          }

          else if (this.player.didCollide(obstacle) && !this.player.jumping) {
            this.player.pushBack(obstacle)
            this.hpoints -= 1/2;
            this.lives.textContent = `${this.hpoints}`;
            let blinkCount = 0;
            const blinking = setInterval(() =>{
              this.player.element.style.opacity ="0.4"
              if (this.player.element.style.opacity ="0.4") {
                const delay3 = setTimeout(() => { 
              this.player.element.style.opacity = "1"
                },100)
              };
              blinkCount ++;
              if(blinkCount >= 3){
                clearInterval(blinking)
              }
            }, 300);
          }

          else if (obstacle.left < 0) {
            this.score++;
            obstacle.element.remove();
            this.enemies.splice(i, 1);
            
          }
        }
    
        if (this.hpoints === 0) {
          this.endGame();
        }
        }
      }

