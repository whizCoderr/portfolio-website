let navMenu = document.getElementById("nav-menu");
let menuBtn = document.getElementById("menu-btn");
let navItems = document.querySelectorAll(".nav-menu a");
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("close-btn");
        navMenu.classList.toggle("show-menu");
    });
};

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
        menuBtn.classList.remove("close-btn");
    });
});

// Navigation bar effects on scroll
let header = document.getElementById("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
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
let scrollToTopBtn = document.getElementById("scrollToTop-btn");
let Logo = document.getElementById("logo");
window.addEventListener("scroll", function () {
    scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
});

Logo.addEventListener("click", () => {
    document.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

scrollToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Scroll Reveal Animation
ScrollReveal({
    reset: 'true',
    distance: '60px',
    duration: 2500,
    delay: 100,
});

ScrollReveal().reveal('.earliest, .about-specifics, .contact-form-grid', { delay: 250, origin: 'top'});
ScrollReveal().reveal('.home-clone, .scroll, .about-clone, .skills-progress, .education-grid-card, .contact-earliest-grid', { delay: 250, origin: 'bottom'});
ScrollReveal().reveal('.portfolio-grid-card, .footer-earliest, .footer-quick-links, .footer-specifics, .footer-media-modules', {
    delay: 250,
    opacity: 0,
    interval: 360,
});

ScrollReveal().reveal('.services-grid-card', {
    delay: 250,
    rotate: {
        x: 180,
    }
});