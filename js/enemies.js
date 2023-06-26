class bee {
  constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.width = 190;
      this.height = 107;
      this.left = 1340;
      this.top = 500;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
      this.gameScreen.appendChild(this.element);
      this.element.src = "../images/bee.gif";
      this.element.style.position = "absolute";

      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
  
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.visibility = 'hidden';

    }
    updatePosition() {
     
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      this.left -= 3;
      
      this.updatePosition();
    }
}
class bug {
  constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.width = 190;
      this.height = 107;
      this.left = 1340;
      this.top = 540;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
      this.gameScreen.appendChild(this.element);
      this.element.src = "../images/bugMirrored.gif";
      this.element.style.position = "absolute";
      this.element.style.transform = "scaleX(-1)"

      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
  
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.visibility = 'hidden';

    }
    updatePosition() {
     
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      this.left -= 3;
      
      this.updatePosition();
    }
}

class crab {
  constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.width = 180;
      this.height = 150;
      this.left = 1340;
      this.top = 500;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
      this.gameScreen.appendChild(this.element);
      this.element.src = "../images/crab2.gif";
      this.element.style.position = "absolute";

      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
  
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.visibility = 'hidden';

    }
    updatePosition() {
     
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      this.left -= 3;
      
      this.updatePosition();
    }
}

class robot {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.width = 180;
        this.height = 150;
        this.left = 1360;
        this.top = 510;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.gameScreen.appendChild(this.element);
        this.element.src = "../images/robot3.gif";
        this.element.style.position = "absolute";

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
    
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.visibility = 'hidden';

      }
      updatePosition() {
       
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }
    
      move() {
        this.left -= 3;
        
        this.updatePosition();
      }
}

class spikes {
  constructor(gameScreen, left, top, width, height, imgSrc) {
      this.gameScreen = gameScreen;
      this.width = 90;
      this.height = 100;
      this.left = 1445;
      this.top = 532;
      this.directionX = 0;
      this.directionY = 0;
      this.element = document.createElement("img");
      this.gameScreen.appendChild(this.element);
      this.element.src = "../images/spikes.png";
      this.element.style.position = "absolute";

      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
  
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
      this.element.style.visibility = 'hidden';

    }
    updatePosition() {
     
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      this.left -= 3;
      
      this.updatePosition();
    }
}

