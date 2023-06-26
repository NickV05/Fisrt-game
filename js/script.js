window.onload = function () {
      
  const startButton = document.getElementById("but");

  but.addEventListener("click", function () {
    audio = document.getElementById("myAudio");
  audio.play();
    fadeOut();
    const timeoutId = setTimeout(toggleVisibility, 2500);
    const timeoutId2 = setTimeout(startGame, 2500);
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();}

  function fadeOut() {
    let startM = document.getElementById("startMenu");
    let opacity = 1; 
    let fadeEffect = setInterval(function() {
      if (opacity > 0) {
        opacity -= 0.1; 
        startM.style.opacity = opacity;
      } else {
        clearInterval(fadeEffect); 
      }
    }, 100);
  }

  

  function toggleVisibility() {
    let element1 = document.getElementById("startMenu");
    let element2 = document.getElementById("game-screen");
    
    element1.style.display = "none";
    element2.style.display = "block";
  }
};


const keyDownHandler = (e) => {
  const key = e.key;
  let movements = ["ArrowLeft", "ArrowRight", " "];
  if (movements.includes(key)) {
    e.preventDefault();
    if (key === "ArrowLeft") {
      game.player.directionX = -5;
      game.player.element.src = "../images/running.gif"
      game.player.element.style.transform = "scaleX(-1)"
    } else if (key === "ArrowRight") {
      game.player.directionX = 5;
      game.player.element.style.transform = ""
      game.player.element.src = "../images/running.gif"
      
    }
    else if (key === " ") {
      game.player.jump();
    }
  }
};

const keyUpHandler = (e) => {
  const key = e.key;
  let movements = ["ArrowLeft", "ArrowRight"];
  if (movements.includes(key)) {
    e.preventDefault();
    if (key === "ArrowLeft" && game.player.directionX === -5) {
      game.player.directionX = 0;
      game.player.element.src = "../images/sonic.png";
    } else if (key === "ArrowRight" && game.player.directionX === 5) {
      game.player.directionX = 0;
      game.player.element.src = "../images/sonic.png";
    }
  }
};

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);   