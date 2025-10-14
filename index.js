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
    setInterval(() => {
        sidebarData.forEach(data => {
            data.classList.add("side-bar-animation");
        })
    }, 1000);

})

closeMenu.addEventListener("click", () => {
    document.documentElement.style.overflow = 'auto';
    overlay.classList.remove("open");
    sideMenu.classList.remove("open");
})




