const menuToggle = document.querySelector(".nav__toggle");
const menuNav = document.querySelector(".nav");
const scrollWrapper = document.querySelector(".scroll-wrapper");
const backTop = document.querySelector(".back-to-top");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("nav__toggle-show");
  menuNav.classList.toggle("nav-show");
  scroll-wrapper.classList.toggle("over-hidden");
});

// Close the menu if the screen size is larger than 768px
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menuToggle.classList.remove("nav__toggle-show");
    menuNav.classList.remove("nav-show");
  }
});

// back to top btn
scrollWrapper.addEventListener("scroll", () => {
  if (scrollWrapper.scrollTop > 700) {
    backTop.classList.add("back-to-top--show");
  } else {
    backTop.classList.remove("back-to-top--show");
  }
});

// Scroll to the top of the page when
backTop.addEventListener("click", () => {
  scrollWrapper.scrollTo({ top: 0, behavior: "smooth" });
});
