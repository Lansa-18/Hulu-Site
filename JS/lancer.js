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
const toggleBtn = document.querySelector(".toggle--button");
const toggleBg = document.querySelector(".toggle");
const flexRight1 = document.querySelector(".plan__overall-middle--flex-right1");
const flexRight2 = document.querySelector(".plan__overall-middle--flex-right2");
const bottom1 = document.querySelector(".plan__overall-bottom1");
const bottom2 = document.querySelector(".plan__overall-bottom2");

// FUNCTION THAT ALLOWS THE ADDON OPENER TO WORK

let openedAddon = null;
const addonOpener = (addonId, isOpenInitially = false) => {
  const addon = document.getElementById(addonId);

  let isOpen = isOpenInitially;
  if (isOpen) {
    addon.style.display = "none";
    openedAddon = addon;
  }

  hiderDiv.addEventListener("click", () => {
    if (openedAddon !== null && openedAddon !== addon) {
      openedAddon.style.display = "none";
    }

    isOpen = !isOpen;
    if (isOpen) {
      hiderDiv.style.borderTop = "none";
      addon.style.display = "block";
      hiderImg.src = "./img/Dropdown_Up_Arrow.svg";
      hiderH3.textContent = "Hide Add-ons";

      // Setting the openedAddon to the addon
      openedAddon = addon;
    } else {
      addon.style.display = "none";
      hiderImg.src = "./img/Dropdown_Down_Arrow.svg";
      hiderH3.textContent = "Show Add-ons";
      hiderDiv.style.borderTop = "1px solid #c8c8c866";
      // Resetting the openedAddon to null
      openedAddon = null;
    }
  });
};

addonOpener("addon1", true);

const toggler = () => {
  if (!toggleBtn.classList.contains("toggle-active")) {
    toggleBtn.classList.add("toggle-active");
    toggleBtn.style.transform = "translateX(3rem)";
    toggleBg.style.backgroundColor = "#1ce783";
    flexRight1.style.display = "none";
    flexRight2.style.display = "flex";
    bottom1.style.display = "none";
    bottom2.style.display = "block";
    addonOpener("addon2");
  } else {
    toggleBtn.style.transform = "translateX(0)";
    toggleBg.style.backgroundColor = "#424957";
    flexRight1.style.display = "flex";
    flexRight2.style.display = "none";
    bottom1.style.display = "block";
    bottom2.style.display = "none";
    toggleBtn.classList.remove("toggle-active");
    addonOpener("addon1");
  }
};

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
        if (window.innerWidth <= 1200){
          sectionSports.style.backgroundImage = "url(/img/blue-bg-port.jpeg)";
        } else {
          sectionSports.style.backgroundImage = "url(/img/blue-bg.jpeg)";
        }
        switch_H2.textContent = "Breaking News";
        switchP.textContent =
          "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.";
        img1.src = "./img/newslive.png";
        img2.src = "./img/cnn.svg";
        img3.src = "./img/msnbc.png";
        img4.src = "./img/foxnews.svg";
        break;
      case events:
        if (window.innerWidth <= 1200){
          sectionSports.style.backgroundImage = "url(/img/pink-bg-port.jpeg)";
        } else {
          sectionSports.style.backgroundImage = "url(/img/pink-bg.jpeg)";
        }
        switch_H2.textContent = "Biggest Events";
        switchP.textContent =
          "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.";
        img1.src = "./img/cream-yellow.png";
        img2.src = "./img/goldenglobe.png";
        img3.src = "./img/grammy.png";
        img4.src = "./img/oscars.png";
        break;
      case sport:
        if (window.innerWidth <= 1200){
          sectionSports.style.backgroundImage = "url(/img/green-bg-port.jpeg)";
        } else {
          sectionSports.style.backgroundImage = "url(/img/green-bg.jpeg)";
        }
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
    // Using the animationend event listener to remove the animate class once the animation ends.
    sportContentText.addEventListener("animationend", () => {
      sportContentText.classList.remove("animate");
    });
  });
});

toggleBg.addEventListener("click", toggler);

window.addEventListener('scroll', ()=>{
  const stickyDiv = document.querySelector('.plan__overall-middle');
  const desiredScrollPosition = 3555.35;

  if (window.pageYOffset >= desiredScrollPosition) {
    console.log("Reached desired scroll position");
    stickyDiv.style.position = 'static';
    stickyDiv.style.top = '3555.5px';
  } else {
    stickyDiv.style.position = 'sticky';
    stickyDiv.style.top = '0';
  }
});

// window.addEventListener('scroll', () => {
//   const stickyDiv = document.querySelector('.plan__overall-middle');
//   const desiredScrollPosition = 3555.35;

//   if (window.pageYOffset >= desiredScrollPosition) {
//     stickyDiv.style.top = `${window.pageYOffset - desiredScrollPosition}px`;
//   } else {
//     stickyDiv.style.top = '0';
//   }
// });

