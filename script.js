// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// ===== MOBILE SIDEBAR =====
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("open");
});

function hideSidebar() {
  sidebar.classList.remove("open");
}


// ===== SMOOTH SCROLL (FOR INTERNAL LINKS) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===== REVEAL ON SCROLL =====
const revealElements = document.querySelectorAll(
  ".reveal-left, .reveal-right, .reveal-up, .reveal-section"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => observer.observe(el));


// ===== TYPING EFFECT (UPDATED — NO FLUTTER) =====
const typedText = document.getElementById("typedText");

const roles = [
  "Computer Science Student",
  "Web Developer",
  "Python Developer",
  "AI Project Builder"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedText.textContent = currentRole.substring(0, charIndex);

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

// start typing
document.addEventListener("DOMContentLoaded", typeEffect);


// ===== CONTACT FORM HANDLER =====
function handleSubmit(e) {
  e.preventDefault();

  const form = document.getElementById("contactForm");

  const firstName = form["first-name"].value.trim();
  const lastName = form["last-name"].value.trim();
  const email = form["email"].value.trim();
  const message = form["message"].value.trim();

  if (!firstName || !lastName || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Basic email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Simulated submission (since no backend)
  alert("Message sent successfully! I'll get back to you soon.");

  form.reset();
}