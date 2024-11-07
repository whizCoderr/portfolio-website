// Toggle button
let navbar = document.getElementById("nav-menu");
let toggleBtn = document.getElementById("toggle-btn");
let navItems = document.querySelectorAll(".nav-menu a");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("close-btn");
        navbar.classList.toggle("show-menu");
    });
};

navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        navbar.classList.remove('show-menu');
        toggleBtn.classList.remove('close-btn');
    });
});

// Navigation bar effects on scroll
let header = document.getElementById("header");
window.addEventListener("scroll", function () {
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + id + "]").classList.add("active");
        } else {
            document.querySelector(".nav-menu a[href*=" + id + "]").classList.remove("active");
        }
    });
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
const Logo = document.querySelector('.logo');
window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});
Logo.addEventListener("click", () => {
    document.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});