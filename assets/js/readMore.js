document.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('aboutParagraph');
    const button = document.getElementById('readMoreBtn');
  
    // Só ativa a lógica se for celular
    if (window.innerWidth <= 768 && paragraph && button) {
      paragraph.classList.add('collapsed');
      button.style.display = 'inline-block';
  
      button.addEventListener('click', () => {
        paragraph.classList.toggle('collapsed');
        button.textContent = paragraph.classList.contains('collapsed') ? 'Ler mais' : 'Ler menos';
      });
    }
  });