const audio1 = document.createElement("audio");
  audio1.src = "../audio/openM.mp3";
  const audio2 = document.createElement("audio");
  audio2.src ="../audio/options.mp3";
  const audio3 = document.createElement("audio");
  audio3.src ="../audio/okidoki.mp3";
  const audio4 = document.createElement("audio");
  audio4.src="../audio/tailsHero.wav"
  const audio5 = document.createElement("audio");
  audio5.src="../audio/knuckles.wav";
  const audio6= document.createElement("audio");
  audio6.src="../audio/selectHEro.wav";


window.onload = function () {

  const startButton = document.getElementById("but");

  but.addEventListener("click", function () {
    fadeOut();
    const timeoutId = setTimeout(toggleVisibility2, 1300);
    const timeoutId3 = setTimeout(playMusic2, 1100);
    const timeoutId4 = setTimeout(heroSelection, 1300);
    const timeoutId2 = setTimeout(playMusic6, 1300);
  });


  function playMusic1(){
    audio1.play();
  }

  function playMusic2(){
    audio2.play()
  }

  function playMusic3(){
    audio3.play()
  }

  function stopMusic2(){
    audio2.pause()
  }
  function playMusic4(){
    audio4.play()
  }
  function playMusic5(){
    audio5.play()
  }

  function playMusic6(){
    audio6.play()
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
    const timeoutId5 = setTimeout(playMusic3, 400);
    const timeoutId8 = setTimeout(fadeOut2, 1200);
    const timeoutId9 = setTimeout(toggleVisibility3, 3000);
    const timeoutId2 = setTimeout(startGame1, 3000);
    const timeoutId7 = setTimeout(stopMusic2, 2100);
    const timeoutId6 = setTimeout(playMusic1, 2200);

  });

  hero2.addEventListener("click", function () {
    const timeoutId5 = setTimeout(playMusic4, 400);
    const timeoutId10 = setTimeout(fadeOut2, 1200);
    const timeoutId9 = setTimeout(toggleVisibility3, 4000);
    const timeoutId2 = setTimeout(startGame2, 4000);
    const timeoutId7 = setTimeout(stopMusic2, 2100);
    const timeoutId6 = setTimeout(playMusic1, 4000);

  });

  hero3.addEventListener("click", function () {
    const timeoutId5 = setTimeout(playMusic5, 400);
    const timeoutId8 = setTimeout(fadeOut2, 1200);
    const timeoutId9 = setTimeout(toggleVisibility3, 4000);
    const timeoutId2 = setTimeout(startGame3, 4000);
    const timeoutId7 = setTimeout(stopMusic2, 2100);
    const timeoutId6 = setTimeout(playMusic1, 4000);


  });

  function startGame1() {
    game = new Game1();
    game.start();}

  function startGame2() {
      game = new Game2();
      game.start();}

  function startGame3() {
      game = new Game3();
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


  function toggleVisibility2() {
    let element3 = document.getElementById("startMenu");
    let element4 = document.getElementById("select-hero");
    
    element3.style.display = "none";
    element4.style.display = "flex";
  }

  function toggleVisibility3() {
    let element1 = document.getElementById("select-hero");
    element1.style.display = "none";
  
    let element2 = document.getElementById("game-screen");
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
      game.player.element.src = game.player.moveImag;
      game.player.element.style.transform = "scaleX(-1)"
    } else if (key === "ArrowRight") {
      game.player.directionX = 5;
      game.player.element.style.transform = ""
      game.player.element.src = game.player.moveImag;
      
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
      game.player.element.src = game.player.stayImag;
    } else if (key === "ArrowRight" && game.player.directionX === 5) {
      game.player.directionX = 0;
      game.player.element.src = game.player.stayImag;
    }
  }
};

window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);   