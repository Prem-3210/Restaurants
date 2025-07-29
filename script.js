// Menu filtering logic
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update aria-pressed and active styling
    filterButtons.forEach(b => {
      b.setAttribute('aria-pressed', 'false');
      b.classList.remove('active');
    });
    btn.setAttribute('aria-pressed', 'true');
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    menuItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Reservation form confirmation (simulate)
const form = document.getElementById('reservation-form');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  confirmationMessage.textContent = `Thank you, ${form.name.value.trim()}! Your reservation for ${form.date.value} at ${form.time.value} has been received. We will contact you at ${form.email.value}.`;
  form.reset();
  form.name.focus();
});
