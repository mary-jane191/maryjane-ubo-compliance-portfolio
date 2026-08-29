// =========================================================
// MaryJane Uwaeme Ozioma
// UBO Compliance Professional Portfolio
// =========================================================

// Update the footer year automatically
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Smooth navigation for portfolio links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

});


// Mobile navigation
const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("nav-links");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("active");
    });

}


// Close mobile navigation after selecting a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navigation) {
            navigation.classList.remove("active");
        }

    });

});
