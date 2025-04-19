function toggleSidebar() {
  const section = document.getElementById('skills');
  const skillsContent = document.querySelector('.skills-content');

  // Verifica se a largura da tela é menor que 768px (modo celular)
  if (window.innerWidth <= 768) {
    // Comportamento para o modo celular
    if (skillsContent.style.maxHeight) {
      skillsContent.style.maxHeight = null; // Se visível, oculta
    } else {
      skillsContent.style.maxHeight = skillsContent.scrollHeight + "px"; // Se oculto, expande
    }
  } else {
    // Comportamento para o modo desktop
    section.classList.toggle('sidebar-expanded');
    section.classList.toggle('sidebar-collapsed');
  }
}
