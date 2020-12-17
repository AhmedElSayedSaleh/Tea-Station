const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

navBtn.addEventListener("click", function() {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", function() {
  navbar.classList.remove("showNav");
});
