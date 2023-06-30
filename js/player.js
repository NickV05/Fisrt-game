class Sonic {
    constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.width = 90;
      this.height = 150;
      this.left = 170;
      this.top = 480;
      this.directionX = 0;
      this.directionY = 0;
      this.velocityX = 0;
      this.velocityY = 0;
      this.element = document.createElement("img");
      this.gameScreen.appendChild(this.element);
      this.element.src = "./images/sonic.png";
      this.stayImag = "./images/sonic.png";
      this.moveImag = "./images/running.gif";
      this.element.style.position = "absolute";
  
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
  
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.opacity = "1";
      this.audio = document.createElement("audio");
      this.audio.src ="./audio/jump.WAV";

      this.audio2 = document.createElement("audio");
      this.audio2.src ="./audio/hitted.WAV";

      this.jumping = false;
      this.jumpHeight = 250; 
      this.jumpDistance = 0;
      this.pushing = false;
    }
    

    move() {
      this.left += this.directionX;
      if (this.left < 50) {
        this.left = 50;
      }
      if (this.left > this.gameScreen.offsetWidth - this.width - 50) {
        this.left = this.gameScreen.offsetWidth - this.width - 50;
      }
  
      this.updatePosition();
    }

    jump() {
      if (!this.jumping) {
        console.log("jump");
        this.audio.play();
        this.jumping = true;
        const gravity = 0.6;
        const initialJumpSpeed = 17;
        const minY = 0;
        const maxY = 480;
    
        const maxHeight = this.top - this.jumpHeight;
        let velocity = initialJumpSpeed;
    
        if (this.jumping) {
          this.element.src = "./images/rolling.gif";
        }
    
        const jumpInterval = setInterval(() => {
          this.top -= velocity;
          velocity -= gravity;
    
          if (this.top >= maxHeight) {
            this.updatePosition();
          } else {
            if (velocity < -initialJumpSpeed) {
              this.jumping = false;
            }
          }
    
          if (this.top < minY) {
            this.top = minY;
          } else if (this.top > maxY) {
            this.top = maxY;
            this.jumping = false;
          }
    
          if (!this.jumping) {
            clearInterval(jumpInterval);
            this.element.src = "./images/sonic.png";
          }
        }, 16);
      }
    }

    pushBack(obstacle) {
      if (!this.pushing) {
        this.audio2.play();
        this.pushing = true;
        const gravity = 0.6;
        const initialJumpSpeed = 15;
        const minY = 0;
        const maxY = 480;
    
        const maxHeight = this.top - this.jumpHeight;
        let velocity = initialJumpSpeed;
    
        const direction = obstacle.left > this.left ? -1 : 1;
    
        if (this.pushing) {
          this.element.src = "./images/rolling.gif";
        }
    
        const pushInterval = setInterval(() => {
          this.top -= velocity;
          velocity -= gravity;
    
          
          this.left += direction * 10;
    
          if (this.top >= maxHeight) {
            this.updatePosition();
          } else {
            if (velocity < -initialJumpSpeed) {
              this.pushing = false;
            }
          }
    
          if (this.top < minY) {
            this.top = minY;
          } else if (this.top > maxY) {
            this.top = maxY;
            this.pushing = false;
          }
    
          if (!this.pushing) {
            clearInterval(pushInterval);
            this.element.src = "./images/sonic.png";
          }
        }, 16);
      }
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = obstacle.element.getBoundingClientRect();
      if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      ) {
        return true;
      } else {
        return false;
      }
    }
  }


  class Tails {
    constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.width = 90;
      this.height = 150;
      this.left = 170;
      this.top = 480;
      this.directionX = 0;
      this.directionY = 0;
      this.velocityX = 0;
      this.velocityY = 0;
      this.element = document.createElement("img");
      this.gameScreen.appendChild(this.element);
      this.element.src = "./images/tails.gif";
      this.stayImag = "./images/tails.gif";
      this.moveImag = "./images/tailsRun.gif";
      this.element.style.position = "absolute";
  
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
  
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.opacity = "1";
      this.audio = document.createElement("audio");
      this.audio.src ="./audio/jump.WAV";

      this.audio2 = document.createElement("audio");
      this.audio2.src ="./audio/hitted.WAV";

      this.jumping = false;
      this.jumpHeight = 250; 
      this.jumpDistance = 0;
      this.pushing = false;
    }
    

    move() {
      this.left += this.directionX;
      if (this.left < 50) {
        this.left = 50;
      }
      if (this.left > this.gameScreen.offsetWidth - this.width - 50) {
        this.left = this.gameScreen.offsetWidth - this.width - 50;
      }
  
      this.updatePosition();
    }

    jump() {
      if (!this.jumping) {
        console.log("jump");
        this.audio.play();
        this.jumping = true;
        const gravity = 0.6;
        const initialJumpSpeed = 17;
        const minY = 0;
        const maxY = 480;
    
        const maxHeight = this.top - this.jumpHeight;
        let velocity = initialJumpSpeed;
    
        if (this.jumping) {
          this.element.src = "./images/tailsJump.gif";
        }
    
        const jumpInterval = setInterval(() => {
          this.top -= velocity;
          velocity -= gravity;
    
          if (this.top >= maxHeight) {
            this.updatePosition();
          } else {
            if (velocity < -initialJumpSpeed) {
              this.jumping = false;
            }
          }
    
          if (this.top < minY) {
            this.top = minY;
          } else if (this.top > maxY) {
            this.top = maxY;
            this.jumping = false;
          }
    
          if (!this.jumping) {
            clearInterval(jumpInterval);
            this.element.src = "./images/tails.gif";
          }
        }, 16);
      }
    }

    pushBack(obstacle) {
      if (!this.pushing) {
        this.audio2.play();
        this.pushing = true;
        const gravity = 0.6;
        const initialJumpSpeed = 15;
        const minY = 0;
        const maxY = 480;
    
        const maxHeight = this.top - this.jumpHeight;
        let velocity = initialJumpSpeed;
    
        const direction = obstacle.left > this.left ? -1 : 1;
    
        if (this.pushing) {
          this.element.src = "./images/tailsJump.gif";
        }
    
        const pushInterval = setInterval(() => {
          this.top -= velocity;
          velocity -= gravity;
    
          
          this.left += direction * 10;
    
          if (this.top >= maxHeight) {
            this.updatePosition();
          } else {
            if (velocity < -initialJumpSpeed) {
              this.pushing = false;
            }
          }
    
          if (this.top < minY) {
            this.top = minY;
          } else if (this.top > maxY) {
            this.top = maxY;
            this.pushing = false;
          }
    
          if (!this.pushing) {
            clearInterval(pushInterval);
            this.element.src = "./images/tails.gif";
          }
        }, 16);
      }
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = obstacle.element.getBoundingClientRect();
      if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  class Knuckles {
    constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.width = 90;
      this.height = 150;
      this.left = 170;
      this.top = 480;
      this.directionX = 0;
      this.directionY = 0;
      this.velocityX = 0;
      this.velocityY = 0;
      this.element = document.createElement("img");
      this.gameScreen.appendChild(this.element);
      this.element.src = "./images/knuckles player.png";
      this.stayImag = "./images/knuckles player.png";
      this.moveImag = "./images/knucklesMoves.gif";
      this.element.style.position = "absolute";
  
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
  
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.opacity = "1";
      this.audio = document.createElement("audio");
      this.audio.src ="./audio/jump.WAV";

      this.audio2 = document.createElement("audio");
      this.audio2.src ="./audio/hitted.WAV";

      this.jumping = false;
      this.jumpHeight = 250; 
      this.jumpDistance = 0;
      this.pushing = false;
    }
    

    move() {
      this.left += this.directionX;
      if (this.left < 50) {
        this.left = 50;
      }
      if (this.left > this.gameScreen.offsetWidth - this.width - 50) {
        this.left = this.gameScreen.offsetWidth - this.width - 50;
      }
  
      this.updatePosition();
    }

    jump() {
      if (!this.jumping) {
        console.log("jump");
        this.audio.play();
        this.jumping = true;
        const gravity = 0.6;
        const initialJumpSpeed = 17;
        const minY = 0;
        const maxY = 480;
    
        const maxHeight = this.top - this.jumpHeight;
        let velocity = initialJumpSpeed;
    
        if (this.jumping) {
          this.element.src = "./images/knicklesJump.gif";
          this.element.style.transform = "scaleX(-1)";
        }
    
        const jumpInterval = setInterval(() => {
          this.top -= velocity;
          velocity -= gravity;
    
          if (this.top >= maxHeight) {
            this.updatePosition();
          } else {
            if (velocity < -initialJumpSpeed) {
              this.jumping = false;
            }
          }
    
          if (this.top < minY) {
            this.top = minY;
          } else if (this.top > maxY) {
            this.top = maxY;
            this.jumping = false;
          }
    
          if (!this.jumping) {
            clearInterval(jumpInterval);
            this.element.src = "./images/knuckles player.png";
            this.element.style.transform = "";
          }
        }, 16);
      }
    }

    pushBack(obstacle) {
      if (!this.pushing) {
        this.audio2.play();
        this.pushing = true;
        const gravity = 0.6;
        const initialJumpSpeed = 15;
        const minY = 0;
        const maxY = 480;
    
        const maxHeight = this.top - this.jumpHeight;
        let velocity = initialJumpSpeed;
    
        const direction = obstacle.left > this.left ? -1 : 1;
    
        if (this.pushing) {
          this.element.src = "./images/knicklesJump.gif";
        }
    
        const pushInterval = setInterval(() => {
          this.top -= velocity;
          velocity -= gravity;
    
          
          this.left += direction * 10;
    
          if (this.top >= maxHeight) {
            this.updatePosition();
          } else {
            if (velocity < -initialJumpSpeed) {
              this.pushing = false;
            }
          }
    
          if (this.top < minY) {
            this.top = minY;
          } else if (this.top > maxY) {
            this.top = maxY;
            this.pushing = false;
          }
    
          if (!this.pushing) {
            clearInterval(pushInterval);
            this.element.src = "./images/knuckles player.png";
          }
        }, 16);
      }
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
      const playerRect = this.element.getBoundingClientRect();
      const obstacleRect = obstacle.element.getBoundingClientRect();
      if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
