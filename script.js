// Loader
window.addEventListener("load", function () {
  document.querySelector(".loader-wrapper").style.display = "none";
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
    menuToggle.querySelector("i").classList.add("fa-bars");
    menuToggle.querySelector("i").classList.remove("fa-times");
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", function () {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Modal functionality
const modal = document.getElementById("modal");
const joinBtn = document.getElementById("joinBtn");
const loginBtn = document.getElementById("loginBtn");
const closeModal = document.getElementById("closeModal");

function showModal() {
  modal.classList.add("active");
}

function hideModal() {
  modal.classList.remove("active");
}

joinBtn.addEventListener("click", showModal);
loginBtn.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    hideModal();
  }
});

// Contact Form
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  showModal();
  contactForm.reset();
});
