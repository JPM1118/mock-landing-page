import "./styles/style.css";

const primaryNav = document.querySelector(".primary-nav");
const menuIcon = document.querySelector(".site-header__menu-icon");
const closeMenu = document.querySelector(".site-header__close-menu");

menuIcon.addEventListener("click", toggle);
closeMenu.addEventListener("click", toggle);

function toggle() {
  if (primaryNav.classList.contains("hidden")) {
    primaryNav.classList.remove("hidden");
    menuIcon.classList.add("hidden");
    closeMenu.classList.remove("hidden");
  } else {
    primaryNav.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeMenu.classList.add("hidden");
  }
}
