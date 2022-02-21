const allBtn = document.querySelector(".all");
const indBtn = document.querySelector(".ind");

const allPage = document.querySelector(".page-all");
const indPage = document.querySelector(".page-ind");

allBtn.addEventListener("click", () => {
    allBtn.classList.add("curr");
    indBtn.classList.remove("curr");

    allPage.style.display = "block";
    indPage.style.display = "none";
});

indBtn.addEventListener("click", () => {
    allBtn.classList.remove("curr");
    indBtn.classList.add("curr");

    allPage.style.display = "none";
    indPage.style.display = "block";
});