"use strict";
const sectionSports = document.querySelector(".section__sport");
const sectionNews = document.querySelector(".section__news");
const sectionEvents = document.querySelector(".section__events");
const listSections = document.querySelectorAll('.headlines__text');

const sport = document.getElementById("sports");
const news = document.getElementById("news");
const events = document.getElementById("events");

// function for switching through the sections

for (let i = 0; i < listSections.length; i++) {
 const element = listSections[i].classList.contains('headline__active');
 console.log(element);
}
const switchSection = () =>{
}