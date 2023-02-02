const burger = document.querySelector(".burger");
const barmenu = document.querySelector(".bar__menu");

burger.addEventListener("click", () => {
    burger.classList.toggle('active');
    barmenu.classList.toggle('active')
})