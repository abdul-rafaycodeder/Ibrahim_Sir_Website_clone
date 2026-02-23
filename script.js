// DOM ready helpers
function onReady(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

onReady(() => {
  // navigation toggle for mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
      document.body.classList.toggle('nav-open');
      const expanded = navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
      navToggle.setAttribute('aria-expanded', expanded);
    });

    // close menu on link click (useful for single‑page nav)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        document.body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // simple card interaction
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Optional: open in new tab, show modal, etc.
      console.log('Card clicked');
    });

    // Optional: keyboard focus style
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter') card.click();
    });
  });

  // interactive AI cards with mouse-follow effect
  const aiCards = document.querySelectorAll('.ai-card');
  aiCards.forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });
});



// Footer section

// EmailJS Init
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // yahan apni Public Key lagayein
})();

document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  const templateParams = {
    user_email: email
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function (response) {
      document.getElementById("message").innerText = "Subscribed successfully!";
      document.getElementById("subscribeForm").reset();
    }, function (error) {
      document.getElementById("message").innerText = "Error! Try again.";
    });
});

// =============================
// GSAP Professional Animations
// =============================

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {

  // =============================
  // Hero Section Animation
  // =============================

  const heroTL = gsap.timeline();

  heroTL
    .from(".navbar", {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from("#main-text h1", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    }, "-=0.5")
    .from(".hero-section h5", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.7")
    .from(".hero-buttons .btn", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.6")
    .from(".hero-creators", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");


  // =============================
  // AI Tools Scroll Animation
  // =============================

  gsap.from(".ai-card", {
    scrollTrigger: {
      trigger: ".ai-container",
      start: "top 80%",
    },
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
  });


  // =============================
  // Testimonials Animation
  // =============================

  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".cards-wrapper",
      start: "top 85%",
    },
    y: 70,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });


  // =============================
  // Pricing Cards Animation
  // =============================

  gsap.from(".pricing-card", {
    scrollTrigger: {
      trigger: ".pricing-container",
      start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
  });


  // =============================
  // Button Hover Micro Animation
  // =============================

  const buttons = document.querySelectorAll(".btn, .price-btn");

  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });


  // =============================
  // Smooth Fade for Sections
  // =============================

  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
      },
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

});