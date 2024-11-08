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

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
document.querySelector("#eventYear").textContent = nextYear;

function getRandomCity() {
   return cities[Math.floor(Math.random() * cities.length)];
}
document.querySelector("#eventLocation").textContent = getRandomCity();

function eventCountdown() {
   const eventDate = new Date("October 19, 2025 00:00");
   const now = new Date();
   let timeLeft = eventDate - now;

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

   if (timeLeft <= 0) {
      document.querySelector(".days").textContent = 0;
      document.querySelector(".hours").textContent = 0;
      document.querySelector(".min").textContent = 0;
      document.querySelector(".sec").textContent = 0;
      clearInterval(timerId);
      eventIsOver();
   }
}

let timerId = setInterval(eventCountdown, 1000);

// Event is over
function eventIsOver() {
   const heading = document.querySelector("h1");
   heading.textContent = "Event is over";
   heading.classList.add("endTitle");

   const subHeading = document.querySelector("h3");
   subHeading.textContent = "See you next year!";

   // Change the year to the next year
   const currentYear = new Date().getFullYear();
   const nextYear = currentYear + 1;
   document.querySelector("#eventYear").textContent = nextYear;

   // Randomly select a city from the cities array
   const randomCity = cities[Math.floor(Math.random() * cities.length)];
   document.querySelector("#eventLocation").textContent = randomCity;
}