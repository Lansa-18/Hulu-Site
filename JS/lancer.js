"use strict";
const sectionSports = document.querySelector(".section__sport");
const sectionNews = document.querySelector(".section__news");
const sectionEvents = document.querySelector(".section__events");

const listSections = document.querySelectorAll('.headlines__text');
// console.log(listSections);

const sport = document.getElementById("sports");
const news = document.getElementById("news");
const events = document.getElementById("events");

// function for switching through the sections

listSections.forEach(list =>{
    list.addEventListener('click', changeSection);
});
// const switchSection = () =>{
// }

const changeSection = () =>{
    listSections.forEach(list =>{
        list.classList.remove('headline__active');
    });
    list.classList.add('headline__acitve');
}