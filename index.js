const featuredSection = document.querySelectorAll(".featured-section");
window.addEventListener('load', checkTop);
window.addEventListener('scroll', checkTop);

function checkTop(){
    featuredSection.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top >= 0 && rect.top <= window.innerHeight){
            section.classList.add("animation");            
        }
    })
}



const openMenu = document.querySelector(".menu-open-btn");
const closeMenu = document.querySelector(".close-menu-btn");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");

// sidebar animation
const sidebarData = document.querySelectorAll(".animation");
openMenu.addEventListener("click", () => {
    document.documentElement.style.overflow = 'hidden';
    overlay.classList.add("open");
    sideMenu.classList.add("open");
    sideMenu.style.background = "red";
    sidebarData.forEach(data => {
        data.classList.add("side-bar-animation");
    })

})

closeMenu.addEventListener("click", () => {
    document.documentElement.style.overflow = 'auto';
    overlay.classList.remove("open");
    sideMenu.classList.remove("open");
    sideMenu.style.background = "black";
    sidebarData.forEach(data => {
        data.classList.remove("side-bar-animation");
    })
})

// Footer animation
const dataContainer = document.querySelectorAll("data-container");
dataContainer.forEach(container => {
    container.addEventListener("click", () => {
        const footerRow = container.closest(".footer-row");
        const inputBox = footerRow.querySelector(".input-box");
        const arrow = container.querySelector(".arrow-btn");
    })
})