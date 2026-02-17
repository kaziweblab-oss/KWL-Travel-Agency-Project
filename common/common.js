const navSection = document.querySelector(".nav");
const navIcon1 = navSection.querySelector(".nav-icon");
const navMenu = navSection.querySelector(".nav-menu");
const navIcon2 = navSection.querySelector("nav-icon2");
const navCloser = navSection.querySelector(".nav-closer");
const navLink = navMenu.querySelectorAll("li a");
const navMenuHandaler = navSection.querySelector(".nav-icon-handaler");
const heroSection = document.querySelector(".hero-section");
function navShow() {
  if (navMenu.classList.contains("nav-menu-show")) {
    navMenu.classList.remove("nav-menu-show");
  } else {
    navMenu.classList.add("nav-menu-show");
  }
}
function navClose() {
  navMenu.classList.remove("nav-menu-show");
}
navIcon1.addEventListener("click", navShow);
window.addEventListener("scroll", () => {
  navMenu.classList.remove("nav-menu-show");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    ignoreScroll = true;
    navClose();

    setTimeout(() => {
      ignoreScroll = false;
    }, 500);
  });
});
navMenuHandaler.addEventListener("click", navClose);
heroSection.addEventListener("click", navClose);
