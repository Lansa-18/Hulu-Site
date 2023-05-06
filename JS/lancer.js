"use strict";
const sectionSports = document.querySelector(".section__sport");
// const sectionNews = document.querySelector(".section__news");
// const sectionEvents = document.querySelector(".section__events");

const listSections = document.querySelectorAll(".headlines__text");
// console.log(listSections);

const sport = document.getElementById("sports");
const news = document.getElementById("news");
const events = document.getElementById("events");

// function for switching through the sections

listSections.forEach((list) => {
  list.addEventListener("click", (e) => {
    listSections.forEach((list) => {
      list.classList.remove("headline__active");
    });
    e.target.classList.add("headline__active");

    // Using the switch statement to change the background image of the list that is clicked.
    switch (e.target) {
      case news:
        sectionSports.style.backgroundImage = "url(/img/blue-bg.jpeg)";
        break;
      case events:
        sectionSports.style.backgroundImage = "url(/img/pink-bg.jpeg)";
        break;
      case sport:
        sectionSports.style.backgroundImage = "url(/img/green-bg.jpeg)";
        break;
      default:
        return;
    }
  });
});


