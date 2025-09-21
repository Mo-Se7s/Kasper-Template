"use strict";

// Toggle navigation menu

const toggleMenu = document.querySelector(".toggle-menu");
const navLinks = document.querySelector(".links");
if (toggleMenu && navLinks) {
  toggleMenu.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggleMenu.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("open")
    );
  });
  // Close nav when resizing window more than 768px
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 768 && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        toggleMenu.setAttribute("aria-expanded", "false");
      }
    }, 200);
  });
}
// close nav when link is clicked
const links = document.querySelectorAll("header nav .links a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Link hover effect right left
links.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const mid = rect.width / 2;

    e.target.style.setProperty("--dir", x < mid ? "left" : "right");
  });
});
links.forEach((link) => {
  link.onclick = function () {
    links.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  };
});

function alphabetPosition(text) {
  let alphbet = "abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .split("")
    .map((char) => alphbet.indexOf(char) + 1)
    .filter((num) => num > 0)
    .join(" ");
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));
let a = "acdeghilnorstu"

function longest(s1, s2) {
  let sorted = [];
  (s1+s2).split("").filter((char) => {
      if (!sorted.includes(char)) {
        sorted.push(char);
      }
    });
  return sorted.sort().join("");
}
console.log(longest(a, a));
