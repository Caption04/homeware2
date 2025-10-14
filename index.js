const openMenu = document.querySelector(".menu-open-btn");
const closeMenu = document.querySelector(".close-menu-btn");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");

openMenu.addEventListener("click", () => {
    document.documentElement.style.overflow = 'hidden';
    overlay.classList.add("open");
    sideMenu.classList.add("open");
    
})

closeMenu.addEventListener("click", () => {
    document.documentElement.style.overflow = 'auto';
    overlay.classList.remove("open");
    sideMenu.classList.remove("open");
    
})