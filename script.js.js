// ===============================
// BIG_YOLOX STUDIO WEBSITE SCRIPT
// ===============================

// Mobile Navigation
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Sticky Navbar Effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.padding = "12px 8%";
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,0.15)";
    } else {
        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll(
    ".about, .services, .portfolio, .contact"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-section");
            }
        });
    },
    {
        threshold: 0.2
    }
);

sections.forEach(section => {
    section.classList.add("hidden-section");
    observer.observe(section);
});

// Active Navigation Highlight
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active-link");
        }
    });
});

// Footer Year Auto Update
const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${new Date().getFullYear()} Big_YoloX Studio. All Rights Reserved.`;
}

console.log("Big_YoloX Studio Website Loaded Successfully 🚀");