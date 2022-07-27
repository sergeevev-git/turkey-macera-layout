const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    document.body.classList.toggle("lock");
});

const menuLink = document.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", () => {
        headerBurger.classList.remove("active");
        headerMenu.classList.remove("active");
    });
});
