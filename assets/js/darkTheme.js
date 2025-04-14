const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Trocar ícone do botão 🌙 ↔ ☀️
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});