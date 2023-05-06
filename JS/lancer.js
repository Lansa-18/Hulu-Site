"use strict";
const sectionSports = document.querySelector(".section__sport");
// const sectionNews = document.querySelector(".section__news");
// const sectionEvents = document.querySelector(".section__events");

const listSections = document.querySelectorAll(".headlines__text");
// console.log(listSections);

const sport = document.getElementById("sports");
const news = document.getElementById("news");
const events = document.getElementById("events");

const switch_H1 = document.getElementById('switch-h1');
const switchP = document.getElementById('switch-p');

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
        switch_H1.textContent = 'Breaking News';
        switchP.textContent = "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.";
        break;
      case events:
        sectionSports.style.backgroundImage = "url(/img/pink-bg.jpeg)";
        switch_H1.textContent = 'Biggest Events';
        switchP.textContent = "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.";
        break;
      case sport:
        sectionSports.style.backgroundImage = "url(/img/green-bg.jpeg)";
        switch_H1.textContent = 'Live Sports';
        switchP.textContent = "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.";
        break;
      default:
        return;
    }
  });
});


