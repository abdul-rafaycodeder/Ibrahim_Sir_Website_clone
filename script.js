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

    // close menu on link click (useful for single‑page nav)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('open'));
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