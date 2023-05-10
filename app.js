let menuBtn = document.querySelector(".menu_button");
let mobileNav = document.querySelector(".mobile_nav");

menuBtn.addEventListener("click", function () {
  console.log("Hello World");
  mobileNav.classList.toggle("showNav");

  // if (mobileNav.classList.contains(".clickshow")) {
  //   mobileNav.classList.remove(".clickshow");
  // } else {
  //   mobileNav.classList.add(".clickshow");
  // }
});
