"use strict";
const sectionSports = document.querySelector(".section__sport");

const listSections = document.querySelectorAll(".headlines__text");

const sport = document.getElementById("sports");
const news = document.getElementById("news");
const events = document.getElementById("events");

const switch_H2 = document.getElementById("switch-h2");
const switchP = document.getElementById("switch-p");
const sportContentText = document.querySelector(".sport__content--texts");
const bottomSlider = document.querySelector(".headlines__flex--bottom-slider");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

const hiderDiv = document.getElementById("overall-hider");
const hiderH3 = document.querySelector("#hider-h3");
const hiderImg = document.querySelector("#hider-img");
const addonDiv = document.querySelector("#addon");

// const stickyElement = document.querySelector(".plan__overall-middle");
// const stopStickingAt = document.querySelector("#overall-hider");

// looping through each of the section headings

let prevButton = listSections[0]; // counter for the bottomSlider that would be moving to keep track of where it would move once any listSection has been clicked

listSections.forEach((list) => {
  list.addEventListener("click", (e) => {
    listSections.forEach((list) => {
      list.classList.remove("headline__active");
    });
    e.target.classList.add("headline__active");
    sportContentText.classList.add("animate");

    prevButton.classList.remove("active");
    list.classList.add("active");
    prevButton = list;

    // Using the switch statement to change the background image and texts to match the section of the list that is clicked.
    switch (e.target) {
      case news:
        sectionSports.style.backgroundImage = "url(/img/blue-bg.jpeg)";
        switch_H2.textContent = "Breaking News";
        switchP.textContent =
          "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.";
        img1.src = "./img/newslive.png";
        img2.src = "./img/cnn.svg";
        img3.src = "./img/msnbc.png";
        img4.src = "./img/foxnews.svg";
        break;
      case events:
        sectionSports.style.backgroundImage = "url(/img/pink-bg.jpeg)";
        switch_H2.textContent = "Biggest Events";
        switchP.textContent =
          "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.";
        img1.src = "./img/cream-yellow.png";
        img2.src = "./img/goldenglobe.png";
        img3.src = "./img/grammy.png";
        img4.src = "./img/oscars.png";
        break;
      case sport:
        sectionSports.style.backgroundImage = "url(/img/green-bg.jpeg)";
        switch_H2.textContent = "Live Sports";
        switchP.textContent =
          "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.";
        img1.src = "./img/cbs-sports.png";
        img2.src = "./img/espn.png";
        img3.src = "./img/fs1.svg";
        img4.src = "./img/nfl.png";
        break;
      default:
        return;
    }
    sportContentText.addEventListener("animationend", () => {
      sportContentText.classList.remove("animate");
    });
  });
});

// EVENT LISTENER HANDLING THE ADD-ON HIDER FUNCTIONALITY
let isOpen = false;

// hiderDiv.addEventListener("click", () => {
//   isOpen = !isOpen;
//   if (isOpen) {
//     hiderDiv.style.borderTop = "none";
//     addonDiv.style.display = "block";
//     hiderImg.src = "./img/Dropdown_Up_Arrow.svg";
//     hiderH3.textContent = "Hide Add-ons";
//   } else {
//     addonDiv.style.display = "none";
//     hiderImg.src = "./img/Dropdown_Down_Arrow.svg";
//     hiderH3.textContent = "Show Add-ons";
//     hiderDiv.style.borderTop = "1px solid #c8c8c866";
//   }
// });

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset >= stopStickingAt.offsetTop){
//     stickyElement.style.position = 'absolute';
//     stickyElement.style.top = `${stopStickingAt.offsetTop}px`
//   } else{
//     stickyElement.style.position = 'sticky';
//     stickyElement.style.top = '0'
//   }

//   if (window.pageYOffset <= stickyElement.offsetTop) {
//     stickyElement.style.position = 'sticky';
//     stickyElement.style.top = '0';
//   }
// });


// const stickyElement = document.querySelector(".plan__overall-middle");
// const stopStickingAt = document.querySelector(".footer");
// const originalPosition = stickyElement.getBoundingClientRect();

// window.addEventListener("scroll", () => {
//   const distanceFromTop = originalPosition.top - window.pageYOffset;

//   if (distanceFromTop <= 0) {
//     const maxAbsoluteDistanceFromTop = stopStickingAt.offsetTop - stickyElement.clientHeight;
//     const absoluteDistanceFromTop = Math.min(maxAbsoluteDistanceFromTop, -distanceFromTop);
//     stickyElement.style.position = "absolute";
//     stickyElement.style.top = `${absoluteDistanceFromTop}px`;
//   } else {
//     stickyElement.style.position = "sticky";
//     stickyElement.style.top = "0";
//   }

//   // reset position to original when stopping sticky
//   if (stickyElement.style.position === "absolute" && distanceFromTop > 0) {
//     stickyElement.style.position = "static";
//     stickyElement.style.top = `${originalPosition.top}px`;
//   }
// });


// const stickyElement = document.querySelector(".plan__overall-middle");
// const stopStickingAt = document.querySelector("#overall-hider");
// const originalPosition = stickyElement.getBoundingClientRect();
// let isSticky = false;

// window.addEventListener("scroll", () => {
//   if (!isSticky && window.pageYOffset >= originalPosition.top) {
//     stickyElement.style.position = "sticky";
//     stickyElement.style.top = "0";
//     isSticky = true;
//   } else if (isSticky && window.pageYOffset >= stopStickingAt.offsetTop) {
//     stickyElement.style.position = "absolute";
//     stickyElement.style.top = `${stopStickingAt.offsetTop}px`;
//     isSticky = false;
//   } else if (isSticky) {
//     stickyElement.style.top = "0";
//   } else {
//     stickyElement.style.position = "static";
//     stickyElement.style.top = "auto";
//   }
// });







