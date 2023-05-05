
const navbar = document.querySelector("nav");
const openMenu = document.getElementById("icon-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
    navbar.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    navbar.classList.remove("open");
});
