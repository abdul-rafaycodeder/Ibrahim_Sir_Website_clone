// You can add click effect or modal later
document.addEventListener('DOMContentLoaded', () => {
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
});


const cards = document.querySelectorAll(".ai-card");

cards.forEach(card => {
    card.addEventListener("mousemove", function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", x + "px");
        card.style.setProperty("--mouse-y", y + "px");
    });
});