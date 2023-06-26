class Enemy {
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