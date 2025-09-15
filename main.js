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
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      toggleMenu.setAttribute("aria-expanded", "false");
    }
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








let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  if (isNaN(arr1[i] + arr1[i + 1])) continue;
  arr2.push(arr1[i] + arr1[i + 1]);
}
console.log(arr2);
