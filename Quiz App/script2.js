"use strict";

const timerEl = document.querySelector(".timer");
let seconds = 60;
const setTimer = () => {
  seconds--;
  if (seconds === 0) {
    clearInterval(id);
    timerEl.style.backgroundColor = "red";
  }
  timerEl.innerText = `${seconds}`;
};

const id = setInterval(setTimer, 1000);
