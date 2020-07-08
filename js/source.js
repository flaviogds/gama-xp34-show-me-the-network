const popUpModal = document.getElementById('modal');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay'); 
var hasOpened = false;

document.addEventListener('mouseleave', () => {
  openModal(popUpModal);
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (!hasOpened) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
    hasOpened = true;
  }
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}