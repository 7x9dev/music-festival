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
   const eventDate = new Date("October 19, 2024 00:00");
   const now = new Date();
   let timeLeft = eventDate - now;

   if (timeLeft <= 0) {
      clearInterval(timerID);
      eventIsOver();
      setTimeout(restartCountdown, 1 * 60 * 1000);
   } else {
      updateTimeLeft(timeLeft);
   }
}

function updateTimeLeft(timeLeft) {
   const msInSec = 1000;
   const msInMin = 60 * msInSec;
   const msInHr = 60 * msInMin;
   const msInDay = 24 * msInHr;

   const displayDays = Math.floor(timeLeft / msInDay);
   document.querySelector(".days").textContent = displayDays;

   const displayHours = Math.floor((timeLeft % msInDay) / msInHr);
   document.querySelector(".hours").textContent = displayHours;

   const displayMin = Math.floor((timeLeft % msInHr) / msInMin);
   document.querySelector(".min").textContent = displayMin;

   const displaySec = Math.floor((timeLeft % msInMin) / msInSec);
   document.querySelector(".sec").textContent = displaySec;
}

let timerID = setInterval(countdown, 1000);

function eventIsOver() {
   const heading = document.querySelector("h1");
   heading.textContent = "Event is over";
   heading.classList.add("endTitle");

   const subHeading = document.querySelector("h3");
   subHeading.textContent = "See you next year!";
}

const cities = [
   "New York, USA",
   "Toronto, Canada",
   "Los Angeles, USA",
   "Vancouver, Canada",
   "London, UK",
   "Las Vegas, USA",
   "Montreal, Canada",
   "Tokyo, Japan",
   "Singapore, Singapore",
   "Dubai, OAE",
   "Paris, France",
   "Stockholm, Sweden",
   "San Francisco, USA",
];

function restartCountdown() {
   const now = new Date();
   const nextYear = now.getFullYear() + 1;
   const eventDate = new Date(`October 19, ${nextYear} 00:00`);
   let timeLeft = eventDate - now;

   const randomIndex = Math.floor(Math.random() * cities.length);
   const randomCity = cities[randomIndex];

   const eventDateElement = document.getElementById("eventDate");
   eventDateElement.textContent = `Oct 19, ${nextYear} | ${randomCity}`;

   const heading = document.querySelector("h1");
   heading.textContent = "Insound";
   heading.classList.remove("endTitle");

   const subHeading = document.querySelector("h3");
   subHeading.textContent = "Music festival";

   clearInterval(timerID);

   timerID = setInterval(function () {
      timeLeft -= 1000;
      if (timeLeft <= 0) {
         restartCountdown();
         return;
      }

      updateTimeLeft(timeLeft);
   }, 1000);
}
