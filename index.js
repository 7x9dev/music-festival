const audio = document.querySelector("#song");
audio.volume = 0.2;

const btn = document.querySelector("#playBtn");
let state = "play";
btn.addEventListener("click", function () {
   if (state === "play") {
      document.querySelector("#song").play();
      state = "pause";
   } else {
      document.querySelector("#song").pause();
      state = "play";
   }
});

function countdown() {
   const festivalDate = new Date("October 19, 2023 00:00");
   const now = new Date();
   const timeLeft = festivalDate - now;

   const msInSec = 1000;
   const msInMin = 60 * 1000;
   const msInHr = 60 * 60 * 1000;
   const msInDay = 24 * 60 * 60 * 1000;

   const displayDays = Math.floor(timeLeft / msInDay);
   document.querySelector(".days").textContent = displayDays;

   const displayHours = Math.floor((timeLeft % msInDay) / msInHr);
   document.querySelector(".hours").textContent = displayHours;

   const displayMin = Math.floor((timeLeft % msInHr) / msInMin);
   document.querySelector(".min").textContent = displayMin;

   const displaySec = Math.floor((timeLeft % msInMin) / msInSec);
   document.querySelector(".sec").textContent = displaySec;

   if (timeLeft <= 0) {
      document.querySelector(".days").textContent = 0;
      document.querySelector(".hours").textContent = 0;
      document.querySelector(".min").textContent = 0;
      document.querySelector(".sec").textContent = 0;
      clearInterval(timerID);
   }
}
let timerID = setInterval(countdown, 1000);
