
  window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in-up');

    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active');
      }, index * 100); // Efeito em cascata, 100ms entre cada
    });
  });

