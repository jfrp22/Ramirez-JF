// Función para animar elementos al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    // 1. Animación de aparición suave
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.card, .project');
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Aplicar estilos iniciales (opacidad 0 para animar)
    const cards = document.querySelectorAll('.card, .project');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar

    // 2. Filtrado de proyectos (ejemplo)
    const filterProjects = (category) => {
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            if (category === 'all' || project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    };

    // Botones de filtrado (añade esto en tu HTML si lo necesitas)
    // <button onclick="filterProjects('all')">Todos</button>
    // <button onclick="filterProjects('personal')">Personales</button>

    // 3. Modo oscuro (opcional)
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Guardar preferencia en localStorage
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });

        // Cargar preferencia guardada
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
});

// 4. Validación de formulario (si añades uno)
function validateForm() {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Por favor, ingresa un email válido.');
        return false;
    }
    return true;
}
