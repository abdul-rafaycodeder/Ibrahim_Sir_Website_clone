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

