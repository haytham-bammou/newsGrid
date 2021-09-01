const nav = document.querySelector("#main-nav");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 60) {
    nav.style.opacity = 0.8;
  } else {
    nav.style.opacity = 1;
  }
});
