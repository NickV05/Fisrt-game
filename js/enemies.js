class Spikes {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.width = 90;
        this.height = 100;
        this.left = 1445;
        this.top = 532;
        this.directionX = 0;
        this.directionY = 0;
        this.spikes = document.createElement("img");
        this.gameScreen.appendChild(this.spikes);
        this.spikes.src = "../images/spikes.png";
        this.spikes.style.position = "absolute";
        this.spikes.style.visibility = "visible";

        this.spikes.style.width = `${this.width}px`;
        this.spikes.style.height = `${this.height}px`;
    
        this.spikes.style.left = `${this.left}px`;
        this.spikes.style.top = `${this.top}px`;

      }
}