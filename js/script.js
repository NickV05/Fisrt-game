window.onload = function () {

      
  const startButton = document.getElementById("but");
  const audio1 = document.createElement("audio");
  audio1.src = "../audio/openM.mp3";
  const audio2 = document.createElement("audio");
  audio2.src ="../audio/options.mp3";


  but2.addEventListener("click", function () {
    fadeOut();
    const timeoutId4 = setTimeout(toggleVisibility2, 1300);
    const timeoutId5 = setTimeout(playMusic1, 1300);
    const timeoutId6 = setTimeout(heroSelection, 1300);

  });


  but.addEventListener("click", function () {
    fadeOut();
    const timeoutId = setTimeout(toggleVisibility1, 1300);
    const timeoutId2 = setTimeout(startGame, 1300);
    const timeoutId3 = setTimeout(playMusic2, 1000);
  });


  function playMusic1(){
    audio2.play();
  }

  function playMusic2(){
    audio1.play()
  }

  function heroSelection() {
    let h1User = document.getElementById("selectUser");
    let opacity = 1;
    let increment = -0.15;
    
    setInterval(() => {
      opacity += increment;
      h1User.style.opacity = opacity.toFixed(1); 
      
      if (opacity <= 0 || opacity >= 1) {
        increment = -increment; 
      }
    }, 100); 
  }

  hero1.addEventListener("click", function () {
    
    const timeoutId8 = setTimeout(fadeOut2, 800);
    const timeoutId9 = setTimeout(toggleVisibility3, 1500);

  });

  hero2.addEventListener("click", function () {

    const timeoutId10 = setTimeout(fadeOut2, 800);
    const timeoutId11 = setTimeout(toggleVisibility3, 1500);
  });

  hero3.addEventListener("click", function () {

    const timeoutId12 = setTimeout(fadeOut2, 800);
    const timeoutId13 = setTimeout(toggleVisibility3, 1500);

  });

  function startGame() {
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
    }, 80);
  }


  function fadeOut2() {
    let startM2 = document.getElementById("select-hero");
    let opacity = 1; 
    let fadeEffect = setInterval(function() {
      if (opacity > 0) {
        opacity -= 0.1; 
        startM2.style.opacity = opacity;
      } else {
        clearInterval(fadeEffect); 
      }
    }, 80);
  }

  

  function toggleVisibility1() {
    let element1 = document.getElementById("startMenu");
    let element2 = document.getElementById("game-screen");
    
    element1.style.display = "none";
    element2.style.display = "block";
  }

  function toggleVisibility2() {
    let element3 = document.getElementById("startMenu");
    let element4 = document.getElementById("select-hero");
    
    element3.style.display = "none";
    element4.style.display = "flex";
  }

  function toggleVisibility3() {
    let element2 = document.getElementById("select-hero");
    element2.style.display = "none";
  
    let element3 = document.getElementById("startMenu");
    element3.style.display = "flex";
    
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