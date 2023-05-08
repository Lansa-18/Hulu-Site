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

// const overallHider = document.getElementById("overall-hider");
// const hiderImg = document.getElementById("hider-img");

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
// const rotate180 = 360;

// overallHider.addEventListener("click", () => {
//   // GETTING THE CURRENT ANGLE OF THE IMG
//   const currentRotation =
//     getComputedStyle(hiderImg).getPropertyValue("transform");
//   const angleRegex = /-?\d+(?:\.\d+)?/g;
//   const currentAngle = parseFloat(currentRotation.match(angleRegex[0]));

//   // ADDING THE DESIRED ROTATION ANGLE TO THE CURRENT ANGLE
//   const newAngle = currentAngle + rotate180;

//   // APPLYING THE NEW ROTATION
//   hiderImg.style.transform = "center";
//   hiderImg.style.transition = "transform 0.5s ease-out";
//   hiderImg.style.transform = `rotate(${newAngle}deg)`;

//   console.log(rotate180);
//   console.log(currentRotation);
// });

// overallHider.addEventListener("click", () => {
//   hiderImg.style.transform = 'rotate(360deg)';
// });

const overallHider = document.querySelector('#overall-hider');
const hiderImg = document.querySelector('#hider-img');
const hiderDiv = document.querySelector('#hider-div');
const addOns = document.querySelector('#addon');

let isOpen = false;

overallHider.addEventListener('click', () => {
  // Toggle the state of the open/close button
  isOpen = !isOpen;

  if (isOpen) {
    // Image rotation and text change for open state
    hiderImg.classList.add('rotate180')
    hiderDiv.textContent = 'Hide Add-ons';
    addOns.style.display = 'block';
  } else {
    // Image rotation and text change for closed state
    hiderImg.classList.add('rotate0')
    hiderDiv.textContent = 'Show Add-ons';
    addOns.style.display = 'none';

  }
});
