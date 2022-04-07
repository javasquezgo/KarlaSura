//Variables
const menuBtn = document.querySelector(".header__logo i");
const headerNav = document.querySelector(".header__nav");

//Functions
const toggleNavList = () => {
  headerNav.classList.toggle("visible");
};

//Events
menuBtn.addEventListener("click", toggleNavList);
