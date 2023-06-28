class Game1 {
    constructor(){
        this.gameScreen = document.getElementById("game-screen");
        this.player = new Sonic(this.gameScreen);
        console.log(this.player)
        this.bots = ["Bee","Bug","Crab","Robot"];
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
        this.lives.style.left = "1395px";
        this.lives.style.top = "33px";
        this.lives.style.fontSize = "40px";
        this.lives.style.color = "white";
        this.lives.style.fontFamily = "Monospace";
        this.lives.style.fontWeight = "bold";
        this.audioExplosion = document.createElement("audio");
        this.audioExplosion.src = "../audio/explos.WAV"
        this.audioFail = document.createElement("audio");
        this.audioFail.src = "../audio/gameOver.mp3";
        this.audioEggman1 = document.createElement("audio");
        this.audioEggman1.src = "../audio/eggman1.wav";
        this.audioEggman2 = document.createElement("audio");
        this.audioEggman2.src = "../audio/noWay.wav";
        this.audioEggman3 = document.createElement("audio");
        this.audioEggman3.src = "../audio/gottago.wav";
        this.audioMobile = document.createElement("audio");
        this.audioMobile.src = "../audio/eggmobile.mp3";
        this.audioVictory = document.createElement("audio");
        this.audioVictory.src = "../audio/victory.mp3";

        this.score = 0;
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
        this.audioMobile.pause();
      }

      winGame(){
        this.gameIsOver = true;
        this.gameW = document.createElement("img");
        this.gameScreen.appendChild(this.gameW);
        this.gameW.src = "../images/win.jpg";
        this.gameW.style.position = "absolute";
        this.gameW.style.left = "500px";
        this.gameW.style.top = "200px";
        this.gameW.width = 450;
        this.gameW.height = 300;
        this.gameW.style.border = "solid";
        this.gameW.style.borderColor = "yellow";
        this.audioMobile.pause();
        this.audioVictory.play();

      }
      

      update() {
        this.player.move();
        if(this.score<20){
          if (Math.random() > 0.2 && this.enemies.length < 1) {
            const randomIndex = Math.floor(Math.random() * this.bots.length);
            const randomEnemy = this.bots[randomIndex];
            if(randomEnemy == "Bee"){
              this.enemies.push(new Bee(this.gameScreen));
            }
            else if(randomEnemy == "Bug"){
              this.enemies.push(new Bug(this.gameScreen));
            }
            else if(randomEnemy == "Crab"){
              this.enemies.push(new Crab(this.gameScreen));
            }
            else if(randomEnemy == "Robot"){
              this.enemies.push(new Robot(this.gameScreen));
            }
          }
        }
        else if(this.score=20){
          if (Math.random() > 0.2 && this.enemies.length < 1){
            this.enemies.push(new Boss1(this.gameScreen))
            audio1.pause();
            this.audioEggman1.play();
            this.audioMobile.play();
          }
        }
        
    
        for (let i = 0; i < this.enemies.length; i++) {
          let obstacle = this.enemies[i];
          console.log(this.enemies)
          obstacle.move();
          obstacle.element.style.visibility = 'visible';
          
          
    
      if (this.player.didCollide(obstacle) && this.player.jumping) {
                if(this.score<20){
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
                this.score++;
                const delay4 = setTimeout(() => { 
                  this.imag.remove();
                    },500)
                }
                else{
                  this.audioEggman2.play();
                  let blinkCount = 0;
                  const blinking = setInterval(() =>{
                  obstacle.element.style.opacity ="0.4"
                  if (obstacle.element.style.opacity ="0.4") {
                  const delay3 = setTimeout(() => { 
                  obstacle.element.style.opacity = "1"
                  },500)
                  };
                  blinkCount ++;
                  obstacle.health -= 0.4;
                  if(blinkCount >= 3){
                 clearInterval(blinking)
                  }
                  },500);

                }
                
            
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
            if(this.score<20 || this.score >=21){
              obstacle.element.remove();
            this.enemies.splice(i, 1);
            }
          }
          if(obstacle.health <= 0){
            this.score +=2;
            obstacle.element.src = "../images/eggman-running.gif";
            obstacle.top + 30;
            obstacle.moveLeft();
            this.audioEggman3.play();
            const delay5 = setTimeout(() => { 
            this.enemies.splice(i, 1);
            this.winGame()
                    },2000)
          }
        }
    
        if (this.hpoints <= 0) {
          this.endGame();
        }
        }
      }

      class Game2 {
        constructor(){
            this.gameScreen = document.getElementById("game-screen");
            this.player = new Tails(this.gameScreen);
            console.log(this.player)
            this.bots = ["Bee","Bug","Crab","Robot"];
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
            this.lives.style.left = "1395px";
            this.lives.style.top = "33px";
            this.lives.style.fontSize = "40px";
            this.lives.style.color = "white";
            this.lives.style.fontFamily = "Monospace";
            this.lives.style.fontWeight = "bold";
            this.audioExplosion = document.createElement("audio");
            this.audioExplosion.src = "../audio/explos.WAV"
            this.audioFail = document.createElement("audio");
            this.audioFail.src = "../audio/gameOver.mp3";
            this.audioEggman1 = document.createElement("audio");
            this.audioEggman1.src = "../audio/eggman1.wav";
            this.audioEggman2 = document.createElement("audio");
            this.audioEggman2.src = "../audio/noWay.wav";
            this.audioEggman3 = document.createElement("audio");
            this.audioEggman3.src = "../audio/gottago.wav";
            this.audioMobile = document.createElement("audio");
            this.audioMobile.src = "../audio/eggmobile.mp3";
            this.audioVictory = document.createElement("audio");
            this.audioVictory.src = "../audio/victory.mp3";
    
            this.score = 0;
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
            this.audioMobile.pause();
          }
    
          winGame(){
            this.gameIsOver = true;
            this.gameW = document.createElement("img");
            this.gameScreen.appendChild(this.gameW);
            this.gameW.src = "../images/win.jpg";
            this.gameW.style.position = "absolute";
            this.gameW.style.left = "500px";
            this.gameW.style.top = "200px";
            this.gameW.width = 450;
            this.gameW.height = 300;
            this.gameW.style.border = "solid";
            this.gameW.style.borderColor = "yellow";
            this.audioMobile.pause();
            this.audioVictory.play();
    
          }
          
    
          update() {
            this.player.move();
            if(this.score<20){
              if (Math.random() > 0.2 && this.enemies.length < 1) {
                const randomIndex = Math.floor(Math.random() * this.bots.length);
                const randomEnemy = this.bots[randomIndex];
                if(randomEnemy == "Bee"){
                  this.enemies.push(new Bee(this.gameScreen));
                }
                else if(randomEnemy == "Bug"){
                  this.enemies.push(new Bug(this.gameScreen));
                }
                else if(randomEnemy == "Crab"){
                  this.enemies.push(new Crab(this.gameScreen));
                }
                else if(randomEnemy == "Robot"){
                  this.enemies.push(new Robot(this.gameScreen));
                }
              }
            }
            else if(this.score=20){
              if (Math.random() > 0.2 && this.enemies.length < 1){
                this.enemies.push(new Boss1(this.gameScreen))
                audio1.pause();
                this.audioEggman1.play();
                this.audioMobile.play();
              }
            }
            
        
            for (let i = 0; i < this.enemies.length; i++) {
              let obstacle = this.enemies[i];
              console.log(this.enemies)
              obstacle.move();
              obstacle.element.style.visibility = 'visible';
              
              
        
          if (this.player.didCollide(obstacle) && this.player.jumping) {
                    if(this.score<20){
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
                    this.score++;
                    const delay4 = setTimeout(() => { 
                      this.imag.remove();
                        },500)
                    }
                    else{
                      this.audioEggman2.play();
                      let blinkCount = 0;
                      const blinking = setInterval(() =>{
                      obstacle.element.style.opacity ="0.4"
                      if (obstacle.element.style.opacity ="0.4") {
                      const delay3 = setTimeout(() => { 
                      obstacle.element.style.opacity = "1"
                      },500)
                      };
                      blinkCount ++;
                      obstacle.health -= 0.4;
                      if(blinkCount >= 3){
                     clearInterval(blinking)
                      }
                      },500);
    
                    }
                    
                
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
                if(this.score<20 || this.score >=21){
                  obstacle.element.remove();
                this.enemies.splice(i, 1);
                }
              }
              if(obstacle.health <= 0){
                this.score +=2;
                obstacle.element.src = "../images/eggman-running.gif";
                obstacle.top + 30;
                obstacle.moveLeft();
                this.audioEggman3.play();
                const delay5 = setTimeout(() => { 
                this.enemies.splice(i, 1);
                this.winGame()
                        },2000)
              }
            }
        
            if (this.hpoints <= 0) {
              this.endGame();
            }
            }
          }


          class Game3 {
            constructor(){
                this.gameScreen = document.getElementById("game-screen");
                this.player = new Knuckles(this.gameScreen);
                console.log(this.player)
                this.bots = ["Bee","Bug","Crab","Robot"];
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
                this.lives.style.left = "1395px";
                this.lives.style.top = "33px";
                this.lives.style.fontSize = "40px";
                this.lives.style.color = "white";
                this.lives.style.fontFamily = "Monospace";
                this.lives.style.fontWeight = "bold";
                this.audioExplosion = document.createElement("audio");
                this.audioExplosion.src = "../audio/explos.WAV"
                this.audioFail = document.createElement("audio");
                this.audioFail.src = "../audio/gameOver.mp3";
                this.audioEggman1 = document.createElement("audio");
                this.audioEggman1.src = "../audio/eggman1.wav";
                this.audioEggman2 = document.createElement("audio");
                this.audioEggman2.src = "../audio/noWay.wav";
                this.audioEggman3 = document.createElement("audio");
                this.audioEggman3.src = "../audio/gottago.wav";
                this.audioMobile = document.createElement("audio");
                this.audioMobile.src = "../audio/eggmobile.mp3";
                this.audioVictory = document.createElement("audio");
                this.audioVictory.src = "../audio/victory.mp3";
        
                this.score = 0;
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
                this.audioMobile.pause();
              }
        
              winGame(){
                this.gameIsOver = true;
                this.gameW = document.createElement("img");
                this.gameScreen.appendChild(this.gameW);
                this.gameW.src = "../images/win.jpg";
                this.gameW.style.position = "absolute";
                this.gameW.style.left = "500px";
                this.gameW.style.top = "200px";
                this.gameW.width = 450;
                this.gameW.height = 300;
                this.gameW.style.border = "solid";
                this.gameW.style.borderColor = "yellow";
                this.audioMobile.pause();
                this.audioVictory.play();
        
              }
              
        
              update() {
                this.player.move();
                if(this.score<20){
                  if (Math.random() > 0.2 && this.enemies.length < 1) {
                    const randomIndex = Math.floor(Math.random() * this.bots.length);
                    const randomEnemy = this.bots[randomIndex];
                    if(randomEnemy == "Bee"){
                      this.enemies.push(new Bee(this.gameScreen));
                    }
                    else if(randomEnemy == "Bug"){
                      this.enemies.push(new Bug(this.gameScreen));
                    }
                    else if(randomEnemy == "Crab"){
                      this.enemies.push(new Crab(this.gameScreen));
                    }
                    else if(randomEnemy == "Robot"){
                      this.enemies.push(new Robot(this.gameScreen));
                    }
                  }
                }
                else if(this.score=20){
                  if (Math.random() > 0.2 && this.enemies.length < 1){
                    this.enemies.push(new Boss1(this.gameScreen))
                    audio1.pause();
                    this.audioEggman1.play();
                    this.audioMobile.play();
                  }
                }
                
            
                for (let i = 0; i < this.enemies.length; i++) {
                  let obstacle = this.enemies[i];
                  console.log(this.enemies)
                  obstacle.move();
                  obstacle.element.style.visibility = 'visible';
                  
                  
            
              if (this.player.didCollide(obstacle) && this.player.jumping) {
                        if(this.score<20){
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
                        this.score++;
                        const delay4 = setTimeout(() => { 
                          this.imag.remove();
                            },500)
                        }
                        else{
                          this.audioEggman2.play();
                          let blinkCount = 0;
                          const blinking = setInterval(() =>{
                          obstacle.element.style.opacity ="0.4"
                          if (obstacle.element.style.opacity ="0.4") {
                          const delay3 = setTimeout(() => { 
                          obstacle.element.style.opacity = "1"
                          },500)
                          };
                          blinkCount ++;
                          obstacle.health -= 0.4;
                          if(blinkCount >= 3){
                         clearInterval(blinking)
                          }
                          },500);
        
                        }
                        
                    
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
                    if(this.score<20 || this.score >=21){
                      obstacle.element.remove();
                    this.enemies.splice(i, 1);
                    }
                  }
                  if(obstacle.health <= 0){
                    this.score +=2;
                    obstacle.element.src = "../images/eggman-running.gif";
                    obstacle.top + 30;
                    obstacle.moveLeft();
                    this.audioEggman3.play();
                    const delay5 = setTimeout(() => { 
                    this.enemies.splice(i, 1);
                    this.winGame()
                            },2000)
                  }
                }
            
                if (this.hpoints <= 0) {
                  this.endGame();
                }
                }
              }

