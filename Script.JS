var timer = 60;
var score = 0;
var hitRn = 0;

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timeInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
      
    } else {
      clearInterval(timeInt);
      document.querySelector("#pbtm").innerHTML = `<h2>Game Over.</h2>`;
    }
  }, 1000);
}

function getNewhit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitRn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (detail) {
  var clickNum = Number(detail.target.textContent);
  if (hitRn === clickNum) {
    increaseScore();
    makeBubble();
    getNewhit();
  }
});


runTimer();
makeBubble();
getNewhit();