"use strict";

// navbar variables
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

// navToggle function
const navToggleFunc = function () {
  nav.classList.toggle("active");
};

navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll(".theme-btn");

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener("click", function () {
    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    for (let i = 0; i < themeBtn.length; i++) {
      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle("light");
      themeBtn[i].classList.toggle("dark");
    }
  });
}

// // Select all the blog topics and projects
// const topicButtons = document.querySelectorAll('.topic-btn');
// const projects = document.querySelectorAll('.blog-card');

// topicButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     const selectedTopic = button.querySelector('p').innerText;

//     // Show only the projects matching the selected topic
//     projects.forEach(project => {
//       const projectTopic = project.querySelector('.blog-topic').innerText;
//       project.style.display = projectTopic === selectedTopic ? '' : 'none';
//     });
//   });
// });

// Select all the blog topics and projects
const topicButtons = document.querySelectorAll(".topic-btn");
const projects = document.querySelectorAll(".blog-card");

topicButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove the active class from all topic buttons
    topicButtons.forEach((btn) => btn.classList.remove("active"));

    // Add the active class to the selected button
    button.classList.add("active");

    const selectedTopic = button.querySelector("p").innerText;

    // Show only the projects matching the selected topic
    projects.forEach((project) => {
      const projectTopic = project.querySelector(".blog-topic").innerText;
      project.style.display = projectTopic === selectedTopic ? "" : "none";
    });
  });
});

// Back to Top Button Logic
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopButton.classList.add("show-back-to-top");
  } else {
    backToTopButton.classList.remove("show-back-to-top");
  }
};

// Smooth scroll back to top
backToTopButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
