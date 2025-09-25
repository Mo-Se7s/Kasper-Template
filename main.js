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

// nav bar for my work
const navButtons = document.querySelectorAll(
  ".portfolio .nav_bar ul li button"
);
const portfolioImgs = document.querySelectorAll(".portfolio .my_work .work_box");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active_button"));
    btn.classList.add("active_button");

    const filter = btn.textContent.toLowerCase();

    portfolioImgs.forEach((img, i) => {
      const category = img.getAttribute("data-category");

      if (filter === "all" || category.includes(filter)) {
        img.classList.add("fadeIn");
        img.classList.remove("fadeOut");
      } else {
        img.classList.remove("fadeIn");
        img.classList.add("fadeOut");
      }
    });
  });
});
