// Boton Theme
const btnTheme = document.getElementById('btn-theme');
let isLight = true;

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (isLight) {
        btnTheme.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        btnTheme.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    isLight = !isLight;
});
// Boton Idioma
const btnLanguage = document.getElementById('btn-language');
let isSpanish = true;
btnLanguage.addEventListener('click', () => {
    if (isSpanish) {
        // nav
        document.getElementById('nav-1').textContent = "Profile";
        document.getElementById('nav-2').textContent = "Academic";
        document.getElementById('nav-3').textContent = "Projects";
        document.getElementById('nav-4').textContent = "Contact";
        document.getElementById('in-language').textContent = "ES";
        // header
        document.getElementById('tag-text').textContent = "¡Looking for new challenges! 🚀";
        document.getElementById('hi').textContent = "Hi! My name is";
        document.getElementById('about').textContent = "I'm a student in the University of Buenos Aires (UTN) Programming Program." +
            " With experience in academic and personal projects using Java, Spring, MySQL, HTML, and JavaScript, " +
            "I'm constantly looking for opportunities to grow, contribute, and continue learning.";
        document.getElementById('download-cv').innerHTML =
            '<i class="fa-solid fa-download"></i>' +
            ' Download CV';
        // fields
        document.getElementById('title-1').innerText = "Academic Training";
        document.getElementById('description-1').innerText = 
            "Experience acquired through academic careers.";
        document.getElementById('title-2').innerText = "Featured Projects";
        document.getElementById('description-2').innerText = 
            "Technical challenges that apply the technologies learned.";
        document.getElementById('title-3').innerText = "Development Practices";
        document.getElementById('description-3').innerText = 
            "Designs made for learning purposes.";
        document.getElementById('title-4').innerText = "Information and Contact";
        document.getElementById('description-4').innerText = 
            "Any means of contact available.";
    } else {
        // nav
        document.getElementById('nav-1').textContent = "Perfil";
        document.getElementById('nav-2').textContent = "Formación";
        document.getElementById('nav-3').textContent = "Proyectos";
        document.getElementById('nav-4').textContent = "Contacto";
        document.getElementById('in-language').textContent = "EN";
        // header
        document.getElementById('tag-text').textContent = "¡Buscando nuevos desafíos! 🚀";
        document.getElementById('hi').textContent = "Hola! Mi nombre es";
        document.getElementById('about').textContent = "Soy estudiante de la Tecnicatura Universitaria en Programación en UTN." +
            "Con experiencia en proyectos academicos y personales con Java," +
            "Spring, MySQL, HTML y JavaScript, estoy en constante búsqueda de oportunidades para crecer, " +
            "aportar y seguir aprendiendo.";
        document.getElementById('download-cv').innerHTML =
            '<i class="fa-solid fa-download"></i>' +
            ' Descargar CV';
        // fields
        document.getElementById('title-1').innerText = "Formación Académica";
        document.getElementById('description-1').innerText = 
            "Experiencia adquirida mediante trayectos de carácter académico.";
        document.getElementById('title-2').innerText = "Proyectos Destacados";
        document.getElementById('description-2').innerText = 
            "Desafíos técnicos que aplican las técnologías aprendidas.";
        document.getElementById('title-3').innerText = "Prácticas y Desarrollo";
        document.getElementById('description-3').innerText = 
            "Diseños realizados con fines de aprendizaje.";
        document.getElementById('title-4').innerText = "Información y Contacto";
        document.getElementById('description-4').innerText = 
            "Cualquier medio de contacto disponible.";
    }
    isSpanish = !isSpanish; // cambia de estado
});
