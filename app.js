// let mNav = document.querySelector(".mobile_nav");
// let mbtn = document.querySelector(".menu_button");

// mbtn.addEventListener("click", function () {
//   cosole.log("Hello World");

//   mobileNav.classList.toggle("showNav");

//   if (mNav.classList.contains("clickshow")) {
//     mNav.classList.remove("clickshow");
//   } else {
//     mNav.classList.add("clickshow");
//   }
// });

let menuBtn = document.querySelector(".menu_button");
let mobileNav = document.querySelector(".mobile_nav");

menuBtn.addEventListener("click", function () {
  console.log("Hello World");
  mobileNav.classList.toggle("showNav");

  if (mobileNav.classList.contains(".clickshow")) {
    mobileNav.classList.remove(".clickshow");
  } else {
    mobileNav.classList.add(".clickshow");
  }
});
