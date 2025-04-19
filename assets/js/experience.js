document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.experience-item');
      item.classList.toggle('open');
  
      btn.textContent = item.classList.contains('open') ? 'Ver menos' : 'Ver mais';
      
      // Scroll suave até o item (opcional)
      if (item.classList.contains('open')) {
        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });