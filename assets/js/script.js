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
// Seleciona todos os elementos com a classe 'fade-in-up'
const fadeInElements = document.querySelectorAll('.fade-in-up');

// Função que verifica se o elemento está visível na tela
function checkVisibility() {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // Verifica se o elemento está dentro da área visível
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            // Se o elemento não tiver a classe 'visible', aplica a animação
            if (!element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        }
    });
}

// Verifica a visibilidade dos elementos ao rolar a página
window.addEventListener('scroll', checkVisibility);

// Chama a função inicialmente para adicionar os efeitos em elementos que já estão visíveis
checkVisibility();




















  











    













  






