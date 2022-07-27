const headBurger = document.querySelector(".header__burger");
const headMenu = document.querySelector(".header__menu");

headBurger.addEventListener("click", () => {
    headBurger.classList.toggle("active");
    headMenu.classList.toggle("active");
    document.body.classList.toggle("lock");
});

const headLink = document.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", () => {
        headBurger.classList.remove("active");
        headMenu.classList.remove("active");
    });
});
