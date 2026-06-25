/* =========================================================
   THEME (claro / oscuro)
   ========================================================= */
const btnTheme = document.getElementById('btn-theme');

btnTheme.addEventListener('click', () => {
    // classList.toggle devuelve true si la clase quedó aplicada,
    // así el ícono siempre queda sincronizado con el estado real
    // del body (sin variable aparte que se pueda desfasar).
    const isLight = document.body.classList.toggle('light-mode');

    btnTheme.innerHTML = isLight
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';

    btnTheme.setAttribute(
        'aria-label',
        isLight ? 'Activar modo oscuro' : 'Activar modo claro'
    );
});


/* =========================================================
   IDIOMA (es / en)
   ========================================================= */

// Todos los textos en un solo lugar. Para agregar o cambiar
// una traducción solo se edita acá, en los dos idiomas juntos.
const translations = {
    en: {
        'nav-1': 'Profile',
        'nav-2': 'Academic',
        'nav-3': 'Projects',
        'nav-4': 'Contact',
        'in-language': 'ES',
        'tag-text': 'Looking for new challenges! 🚀',
        'hi': 'Hi! My name is',
        'about': "Full-stack developer with a degree in Programming from the National Technological University (UTN). I have experience in professional, personal, and academic projects, working with Java and Spring on the backend, databases, Angular, and TypeScript. I design and develop websites, covering the entire process: from concept and design through to implementation and deployment.",
        'title-1': 'Academic Training',
        'description-1': 'Experience acquired through academic careers.',
        'en-curso': 'Finished (Certificate in progress)',
        'title-2': 'Featured Projects',
        'description-2': 'Technical challenges that apply the technologies learned.',
        'title-3': 'Development Practices',
        'description-3': 'Designs made for learning purposes.',
        'title-4': 'Information and Contact',
        'description-4': 'Any means of contact available.',
    },
    es: {
        'nav-1': 'Perfil',
        'nav-2': 'Formación',
        'nav-3': 'Proyectos',
        'nav-4': 'Contacto',
        'in-language': 'EN',
        'tag-text': '¡Buscando nuevos desafíos! 🚀',
        'hi': 'Hola! Mi nombre es',
        'about': 'Desarrollador full-stack con formación en la Tecnicatura Universitaria en Programación (UTN). Cuento con experiencia en proyectos profesionales, personales y académicos, donde trabajé con Java y Spring en backend, bases de datos, Angular y Typescript. Me desempeño diseñando y desarrollando sitios web, desde la conceptualización y el diseño hasta la implementación y la puesta en marcha.',
        'title-1': 'Formación Académica',
        'description-1': 'Experiencia adquirida mediante trayectos de carácter académico.',
        'en-curso': 'En curso (Finalizando)',
        'title-2': 'Proyectos Destacados',
        'description-2': 'Desafíos técnicos que aplican las tecnologías aprendidas.',
        'title-3': 'Prácticas y Desarrollo',
        'description-3': 'Diseños realizados con fines de aprendizaje.',
        'title-4': 'Información y Contacto',
        'description-4': 'Cualquier medio de contacto disponible.',
    },
};

// Textos que llevan ícono o afectan a varios elementos a la vez.
const cvLabel = { en: 'Download CV', es: 'Descargar CV' };
const certLabel = { en: 'See certificate', es: 'Ver certificado' };

function applyLanguage(lang) {
    const dict = translations[lang];

    // Textos simples: se setean por id recorriendo el diccionario.
    for (const id in dict) {
        const el = document.getElementById(id);
        if (el) el.textContent = dict[id];
    }

    // Botón CV: mantiene el ícono, por eso usa innerHTML.
    const cv = document.getElementById('download-cv');
    if (cv) {
        cv.innerHTML = '<i class="fa-solid fa-download"></i> ' + cvLabel[lang];
    }

    // Botones "ver certificado": pueden ser varios.
    document.querySelectorAll('.btn-certificado')
        .forEach((btn) => { btn.textContent = certLabel[lang]; });

    // Accesibilidad y SEO: deja el atributo lang del documento al día.
    document.documentElement.lang = lang;
}

const btnLanguage = document.getElementById('btn-language');
let currentLang = 'en'; // arranca en inglés

btnLanguage.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    applyLanguage(currentLang);
});

// Inicializa la página en el idioma por defecto.
applyLanguage(currentLang);


/* =========================================================
   CARRUSEL DE CAPTURAS EN HOVER
   ========================================================= */

// Si la persona pidió menos movimiento en su sistema, no rotamos.
const prefersReducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll('.card-web').forEach((card) => {
    const imgs = card.querySelectorAll('.card-gallery img');

    // Cards con una sola captura (o con reduced-motion) quedan estáticas.
    if (imgs.length < 2 || prefersReducedMotion) return;

    let i = 0;
    let timer = null;

    const start = () => {
        if (timer) return; // evita duplicar el intervalo con hover + focus
        timer = setInterval(() => {
            imgs[i].classList.remove('active');
            i = (i + 1) % imgs.length;
            imgs[i].classList.add('active');
        }, 1000); // tiempo por captura (ms)
    };

    const stop = () => {
        clearInterval(timer);
        timer = null;
        imgs[i].classList.remove('active');
        i = 0;
        imgs[0].classList.add('active'); // vuelve siempre a la primera
    };

    card.addEventListener('mouseenter', start);
    card.addEventListener('mouseleave', stop);
    card.addEventListener('focus', start);
    card.addEventListener('blur', stop);
});