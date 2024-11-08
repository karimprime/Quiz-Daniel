
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const scrolled = window.scrollY > 0;

    // Add or remove the "scrolled" class based on scroll position
    if (scrolled) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});