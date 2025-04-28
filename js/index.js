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
        document.getElementById('nav-2').textContent = "Projects";
        document.getElementById('nav-3').textContent = "Education";
        document.getElementById('nav-4').textContent = "Contact";
        document.getElementById('in-language').textContent = "ES";
        // header
        document.getElementById('tag-text').textContent = "¡Looking for new challenges! 🚀";
        document.getElementById('hi').textContent = "Hello! My name is";
        document.getElementById('about').textContent = "I'm a student in the University of Buenos Aires (UTN) Programming Program." +
            " With experience in academic and personal projects using Java, Spring, MySQL, HTML, and JavaScript, " +
            "I'm constantly looking for opportunities to grow, contribute, and continue learning.";
        document.getElementById('download-cv').innerHTML =
            '<i class="fa-solid fa-download"></i>' +
            ' Download CV';
        // fields
        document.getElementById('title-academic').innerText = "Academic Training";
        document.getElementById('description-academic').innerText = "Experience through academic paths.";
    } else {
        // nav
        document.getElementById('nav-1').textContent = "Perfil";
        document.getElementById('nav-2').textContent = "Proyectos";
        document.getElementById('nav-3').textContent = "Educación";
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
        document.getElementById('title-academic').innerText = "Formación Academica";
        document.getElementById('description-academic').innerText = "Experiencia a través de trayectos de caracter academico.";
    }
    isSpanish = !isSpanish; // cambia de estado
});
