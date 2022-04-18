'use strict';

const timer = document.querySelector('.live__clock');

function calcCurrentTime() {
  const now = new Date();

  const hours = `${now.getHours()}`.padStart(2, 0);
  const minutes = `${now.getMinutes()}`.padStart(2, 0);
  const seconds = `${now.getSeconds()}`.padStart(2, 0);

  timer.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(calcCurrentTime, 1000);
