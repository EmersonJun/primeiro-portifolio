// Selecionando todos os links de navegação
const links = document.querySelectorAll('nav ul li a');

// Adicionando o evento de clique em cada link
links.forEach(link => {
    link.addEventListener('click', function(e) {
        // Previne o comportamento padrão de navegação
        e.preventDefault();
        
        // Obtém o alvo (ID) do link
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Realiza a rolagem suave até o alvo
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
