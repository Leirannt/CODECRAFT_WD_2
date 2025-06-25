const display = document.querySelector(".time");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunnging = false;
let lapTime = document.querySelector(".laps");

function start() {
  if (!isRunnging) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunnging = true;
  }
}

function stop() {
  if (isRunnging) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunnging = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunnging = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let ms = Math.floor((elapsedTime % 1000) % 60);

  hours = String(hours).padStart(2, "00");
  minutes = String(minutes).padStart(2, "00");
  seconds = String(seconds).padStart(2, "00");
  ms = String(ms).padStart(2, "00");

  display.textContent = `${hours}:${minutes}:${seconds}:${ms}`;
}

function lap() {
  if (timer) {
    var l = document.createElement("li");
    l.innerText = display.textContent;
    lapTime.appendChild(l);
  }
}
