class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.width = 90;
      this.height = 150;
      this.left = 170;
      this.top = 480;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
      this.gameScreen.appendChild(this.element);
      this.element.src = "../images/sonic.png";
      this.element.style.position = "absolute";
  
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
  
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
    }
  
    move() {
      console.log("move")
      this.left += this.directionX;
      if (this.left < 50) {
        this.left = 50;
      }
      if (this.left > this.gameScreen.offsetWidth - this.width - 50) {
        this.left = this.gameScreen.offsetWidth - this.width - 50;
      }
  
      this.updatePosition();
    }
  
    updatePosition() {
      console.log("update position")
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  }