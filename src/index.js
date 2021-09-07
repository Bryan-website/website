import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/brands";

import "./index.css";

const menu = document.getElementsByClassName("menu");
const icon = document.getElementById("menu_icon");

console.log(icon.classList);

document.getElementById("menu_icon").onClick = function () {
  console.log("hi");
};

document.getElementById("menu_icon").addEventListener("click", (e) => {
  const div = e.currentTarget;
  const icon = div.children[0];
  const menu = document.getElementById("menu");
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    console.log(menu);
    console.log(menu.classList);
    menu.classList.remove("hidden");
    menu.classList.add("flex");
  } else {
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
    menu.classList.add("hidden");
    menu.classList.remove("flex");
  }
});

// menu.addEventListener("click", (e) => {
//   const menu = e.currentTarget;
//   const icon = menu.children[0];
//   if (icon.classList.contains("fa-bars")) {
//     icon.classList.remove("fa-bars");
//     icon.classList.add("fa-times");
//     menu_links.classList.remove("hidden");
//     menu_links.classList.add("flex");
//   } else {
//     icon.classList.remove("fa-times");
//     icon.classList.add("fa-bars");
//     menu_links.classList.add("hidden");
//     menu_links.classList.remove("flex");
//   }
// });
