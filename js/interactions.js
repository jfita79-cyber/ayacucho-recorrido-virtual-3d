// ============================================================
// INTERACCIONES
// UNIDAD EDUCATIVA AYACUCHO
// ============================================================


// ============================================================
// ELEMENTOS
// ============================================================

const informationPanel =
    document.getElementById('information-panel');

const panelContent =
    document.getElementById('panel-content');


// ============================================================
// INFORMACIÓN
// ============================================================

const DATA = {

    // --------------------------------------------------------
    // INICIO
    // --------------------------------------------------------

    inicio: {

        title:
            'Unidad Educativa Ayacucho',

        subtitle:
            'Bienvenido al recorrido virtual',

        image:
            './images/fachada.jpg',

        text: `
            <p>
                Bienvenido al recorrido virtual de la
                <strong>Unidad Educativa Ayacucho de Catavi</strong>.
            </p>

            <p>
                Este espacio digital permite conocer
                información institucional, aspectos históricos,
                comunidad educativa e infraestructura mediante
                un entorno tridimensional interactivo.
            </p>

            <p>
                Puedes recorrer virtualmente el entorno utilizando
                el personaje y los controles disponibles.
            </p>
        `
    },


    // --------------------------------------------------------
    // HISTORIA
    // --------------------------------------------------------

    historia: {

        title:
            'Historia',

        subtitle:
            'Memoria institucional',

        image:
            './images/ayacuchoantiguo.jpg',

        text: `
            <p>
                La <strong>Unidad Educativa Ayacucho de Catavi</strong>
                se encuentra en la localidad de Catavi, municipio
                de Llallagua, provincia Rafael Bustillo,
                departamento de Potosí.
            </p>

            <p>
                La institución cuenta con documentación histórica
                registrada en el
                <strong>Censo-Guía de Archivos de España e Iberoamérica</strong>.
            </p>

            <p>
                El archivo corresponde a la Unidad Educativa
                Ayacucho de Catavi y se encuentra ubicado en la
                zona Huayrapata.
            </p>

            <p>
                El registro archivístico disponible comprende
                documentación correspondiente al período
                <strong>1969 - 2005</strong>.
            </p>

            <div class="info-box">
                <strong>Importante:</strong>
                <p>
                    El año 1969 corresponde al inicio del período
                    documental registrado en el archivo. Esto no
                    permite afirmar por sí solo que 1969 sea el
                    año oficial de fundación de la institución.
                </p>
            </div>

            <p>
                En el año 2022 se publicó un estudio académico
                relacionado con estudiantes de 12 a 15 años de
                la Unidad Educativa Ayacucho del distrito de Catavi.
            </p>
        `
    },


    // --------------------------------------------------------
    // INSTITUCIÓN
    // --------------------------------------------------------

    institucion: {

        title:
            'La institución',

        subtitle:
            'Conoce nuestra unidad educativa',

        image:
            './images/fachada.jpg',

        text: `
            <h3>Datos institucionales</h3>

            <p>
                <strong>Nombre:</strong>
                Unidad Educativa Ayacucho
            </p>

            <p>
                <strong>Localidad:</strong>
                Catavi
            </p>

            <p>
                <strong>Municipio:</strong>
                Llallagua
            </p>

            <p>
                <strong>Provincia:</strong>
                Rafael Bustillo
            </p>

            <p>
                <strong>Departamento:</strong>
                Potosí
            </p>

            <p>
                <strong>País:</strong>
                Bolivia
            </p>

            <p>
                La institución forma parte de la comunidad
                educativa de Catavi y desarrolla actividades
                de formación para sus estudiantes.
            </p>

            <h3>Ubicación</h3>

            <p>
                El registro archivístico ubica a la institución
                en la zona <strong>Huayrapata</strong>,
                localidad de Catavi, municipio de Llallagua,
                provincia Rafael Bustillo, departamento de Potosí.
            </p>
        `
    },


    // --------------------------------------------------------
    // DOCENTES
    // --------------------------------------------------------

   docentes: {

    title:
        'Plantel docente',

    subtitle:
        'Comunidad educativa - Datos demostrativos',

    text: `

        <p>
            El plantel docente de la Unidad Educativa
            Ayacucho está conformado por profesionales
            responsables de acompañar la formación
            académica y personal de los estudiantes.
        </p>

      

        <div class="teacher-preview">

            <div class="teacher-card">

                <div class="teacher-icon">
                    👨‍🏫
                </div>

                <strong>
                    Carlos Alberto Mamani
                </strong>

                <span>
                    Matemática
                </span>

            </div>


            <div class="teacher-card">

                <div class="teacher-icon">
                    👩‍🏫
                </div>

                <strong>
                    María Elena Quispe
                </strong>

                <span>
                    Comunicación y Lenguaje
                </span>

            </div>


            <div class="teacher-card">

                <div class="teacher-icon">
                    👨‍🏫
                </div>

                <strong>
                    Juan Pablo Condori
                </strong>

                <span>
                    Ciencias Naturales
                </span>

            </div>


            <div class="teacher-card">

                <div class="teacher-icon">
                    👩‍🏫
                </div>

                <strong>
                    Rosa Patricia Flores
                </strong>

                <span>
                    Ciencias Sociales
                </span>

            </div>


            <div class="teacher-card">

                <div class="teacher-icon">
                    👨‍🏫
                </div>

                <strong>
                    Luis Fernando Choque
                </strong>

                <span>
                    Educación Física
                </span>

            </div>


            <div class="teacher-card">

                <div class="teacher-icon">
                    👩‍🏫
                </div>

                <strong>
                    Ana María Vargas
                </strong>

                <span>
                    Educación Artística
                </span>

            </div>

        </div>

    `
},
    // --------------------------------------------------------
    // MATERIAS
    // --------------------------------------------------------
materias: {

    title:
        'Materias',

    subtitle:
        'Áreas de formación - Datos demostrativos',

    text: `

        <p>
            La Unidad Educativa desarrolla diferentes
            áreas de formación destinadas al desarrollo
            integral de los estudiantes.
        </p>

        <div class="info-box">

            <strong>
                📚 Áreas académicas
            </strong>

            <p>
                La siguiente información es demostrativa
                y puede ser reemplazada posteriormente
                por la malla curricular oficial.
            </p>

        </div>


        <div class="subjects-grid">


            <div class="subject-card">

                <div class="subject-icon">
                    📐
                </div>

                <strong>
                    Matemática
                </strong>

                <span>
                    Números, álgebra, geometría
                    y resolución de problemas.
                </span>

            </div>


            <div class="subject-card">

                <div class="subject-icon">
                    📖
                </div>

                <strong>
                    Comunicación y Lenguaje
                </strong>

                <span>
                    Lectura, escritura, expresión
                    oral y comprensión.
                </span>

            </div>


            <div class="subject-card">

                <div class="subject-icon">
                    🔬
                </div>

                <strong>
                    Ciencias Naturales
                </strong>

                <span>
                    Biología, física, química
                    y medio ambiente.
                </span>

            </div>


            <div class="subject-card">

                <div class="subject-icon">
                    🌎
                </div>

                <strong>
                    Ciencias Sociales
                </strong>

                <span>
                    Historia, geografía, sociedad
                    y cultura.
                </span>

            </div>


            <div class="subject-card">

                <div class="subject-icon">
                    💻
                </div>

                <strong>
                    Tecnología
                </strong>

                <span>
                    Informática, tecnología y
                    herramientas digitales.
                </span>

            </div>


            <div class="subject-card">

                <div class="subject-icon">
                    🏃
                </div>

                <strong>
                    Educación Física
                </strong>

                <span>
                    Actividad física, deporte,
                    salud y recreación.
                </span>

            </div>


            <div class="subject-card">

                <div class="subject-icon">
                    🎨
                </div>

                <strong>
                    Artes Plásticas
                </strong>

                <span>
                    Expresión artística, dibujo,
                    pintura y creatividad.
                </span>

            </div>


            <div class="subject-card">

                <div class="subject-icon">
                    🎵
                </div>

                <strong>
                    Música
                </strong>

                <span>
                    Expresión musical, ritmo,
                    interpretación y cultura.
                </span>

            </div>


            <div class="subject-card">

                <div class="subject-icon">
                    🇧🇴
                </div>

                <strong>
                    Formación Ciudadana
                </strong>

                <span>
                    Valores, convivencia, ciudadanía
                    y participación.
                </span>

            </div>


            <div class="subject-card">

                <div class="subject-icon">
                    🌱
                </div>

                <strong>
                    Medio Ambiente
                </strong>

                <span>
                    Conservación, recursos naturales
                    y cuidado del entorno.
                </span>

            </div>


        </div>

    `
},


    // --------------------------------------------------------
    // GALERÍA
    // --------------------------------------------------------

    galeria: {

        title:
            'Galería',

        subtitle:
            'Recuerdos de nuestra institución',

        text: `
            <p>
                Conoce algunas fotografías relacionadas con
                la Unidad Educativa Ayacucho.
            </p>

            <p>
                Utiliza la opción <strong>Galería</strong>
                del menú para visualizar las imágenes
                disponibles.
            </p>
        `
    },


    // --------------------------------------------------------
    // UBICACIÓN
    // --------------------------------------------------------

    ubicacion: {

        title:
            'Ubicación',

        subtitle:
            'Unidad Educativa Ayacucho de Catavi',

        image:
            './images/fachada.jpg',

        text: `
            <h3>
                Ubicación institucional
            </h3>

            <p>
                <strong>Localidad:</strong>
                Catavi
            </p>

            <p>
                <strong>Municipio:</strong>
                Llallagua
            </p>

            <p>
                <strong>Provincia:</strong>
                Rafael Bustillo
            </p>

            <p>
                <strong>Departamento:</strong>
                Potosí
            </p>

            <p>
                <strong>País:</strong>
                Bolivia
            </p>

            <p>
                <strong>Zona:</strong>
                Huayrapata
            </p>

            <div class="info-box">

                <strong>
                    Unidad Educativa Ayacucho de Catavi
                </strong>

                <p>
                    Catavi, municipio de Llallagua,
                    provincia Rafael Bustillo,
                    departamento de Potosí, Bolivia.
                </p>

            </div>
        `
    }

};


// ============================================================
// ABRIR PANEL
// ============================================================

function openPanel(type) {

    const data =
        DATA[type];

    if (!data) {

        console.warn(
            'No existe información para:',
            type
        );

        return;
    }


    panelContent.innerHTML = `

        <h2 class="panel-title">
            ${data.title}
        </h2>

        <p class="panel-subtitle">
            ${data.subtitle}
        </p>

        ${
            data.image
                ? `
                    <img
                        class="panel-image"
                        src="${data.image}"
                        alt="${data.title}"
                    >
                  `
                : ''
        }

        <div class="panel-text">

            ${data.text}

        </div>

    `;


    informationPanel.classList.remove(
        'hidden'
    );

}


// ============================================================
// CERRAR PANEL
// ============================================================

document
    .getElementById('close-panel')
    .addEventListener(
        'click',
        () => {

            informationPanel
                .classList.add(
                    'hidden'
                );

        }
    );


// ============================================================
// BOTONES DEL MENÚ
// ============================================================

document
    .querySelectorAll(
        '#main-navigation button'
    )
    .forEach(
        button => {

            button.addEventListener(
                'click',
                () => {

                    const section =
                        button.dataset.section;

                    /*
                     * GALERÍA SE MANEJA APARTE
                     */

                    if (
                        section === 'galeria'
                    ) {

                        openGallery();

                        return;

                    }


                    openPanel(
                        section
                    );

                }
            );

        }
    );


// ============================================================
// PANTALLA DE BIENVENIDA
// ============================================================

const welcomeScreen =
    document.getElementById(
        'welcome-screen'
    );


const enterWorld =
    document.getElementById(
        'enter-world'
    );


const openInstitution =
    document.getElementById(
        'open-institution'
    );


if (enterWorld) {

    enterWorld.addEventListener(
        'click',
        () => {

            welcomeScreen.style.display =
                'none';

        }
    );

}


if (openInstitution) {

    openInstitution.addEventListener(
        'click',
        () => {

            welcomeScreen.style.display =
                'none';

            openPanel(
                'inicio'
            );

        }
    );

}


// ============================================================
// MENÚ MÓVIL
// ============================================================

const menuToggle =
    document.getElementById(
        'menu-toggle'
    );


if (menuToggle) {

    menuToggle.addEventListener(
        'click',
        () => {

            const nav =
                document.getElementById(
                    'main-navigation'
                );


            nav.classList.toggle(
                'mobile-open'
            );

        }
    );

}


// ============================================================
// GALERÍA
// ============================================================

const galleryModal =
    document.getElementById(
        'gallery-modal'
    );

const galleryImage =
    document.getElementById(
        'gallery-image'
    );

const galleryCaption =
    document.getElementById(
        'gallery-caption'
    );

const closeGalleryButton =
    document.getElementById(
        'close-gallery'
    );

const galleryPrev =
    document.getElementById(
        'gallery-prev'
    );

const galleryNext =
    document.getElementById(
        'gallery-next'
    );


const galleryImages = [

    {
        src:
            './images/fachada.jpg',

        caption:
            'Unidad Educativa Ayacucho'
    },

    {
        src:
            './images/ayacuchoantiguo.jpg',

        caption:
            'Memoria histórica de la institución'
    },

    {
        src:
            './images/imagen1.jpg',

        caption:
            'Comunidad educativa'
    },

    {
        src:
            './images/imagen2.png',

        caption:
            'Unidad Educativa Ayacucho'
    }

];


let currentGalleryIndex =
    0;


function showGalleryImage(index) {

    if (
        !galleryModal ||
        !galleryImage
    ) {

        return;

    }


    if (
        index < 0
    ) {

        index =
            galleryImages.length - 1;

    }


    if (
        index >=
        galleryImages.length
    ) {

        index = 0;

    }


    currentGalleryIndex =
        index;


    galleryImage.src =
        galleryImages[
            currentGalleryIndex
        ].src;


    galleryCaption.textContent =
        galleryImages[
            currentGalleryIndex
        ].caption;

}


function openGallery() {

    if (!galleryModal) {

        return;

    }


    showGalleryImage(
        currentGalleryIndex
    );


    galleryModal.classList.remove(
        'hidden'
    );

}


function closeGallery() {

    if (!galleryModal) {

        return;

    }


    galleryModal.classList.add(
        'hidden'
    );

}


if (closeGalleryButton) {

    closeGalleryButton.addEventListener(
        'click',
        closeGallery
    );

}


if (galleryPrev) {

    galleryPrev.addEventListener(
        'click',
        () => {

            showGalleryImage(
                currentGalleryIndex - 1
            );

        }
    );

}


if (galleryNext) {

    galleryNext.addEventListener(
        'click',
        () => {

            showGalleryImage(
                currentGalleryIndex + 1
            );

        }
    );

}


if (galleryModal) {

    galleryModal.addEventListener(
        'click',
        event => {

            if (
                event.target ===
                galleryModal
            ) {

                closeGallery();

            }

        }
    );

}


// ============================================================
// CONTROLES MÓVILES
// ============================================================

document
    .querySelectorAll(
        '#mobile-controls [data-key]'
    )
    .forEach(
        button => {

            const key =
                button.dataset.key;


            button.addEventListener(
                'pointerdown',
                event => {

                    event.preventDefault();

                    if (
                        typeof keys !==
                        'undefined'
                    ) {

                        keys[key] =
                            true;

                    }

                }
            );


            button.addEventListener(
                'pointerup',
                () => {

                    if (
                        typeof keys !==
                        'undefined'
                    ) {

                        keys[key] =
                            false;

                    }

                }
            );


            button.addEventListener(
                'pointerleave',
                () => {

                    if (
                        typeof keys !==
                        'undefined'
                    ) {

                        keys[key] =
                            false;

                    }

                }
            );

        }
    );


// ============================================================
// BOTÓN CORRER MÓVIL
// ============================================================

const mobileRun =
    document.getElementById(
        'mobile-run'
    );


if (mobileRun) {

    mobileRun.addEventListener(
        'pointerdown',
        event => {

            event.preventDefault();

            if (
                typeof keys !==
                'undefined'
            ) {

                keys.shift =
                    true;

            }

        }
    );


    mobileRun.addEventListener(
        'pointerup',
        () => {

            if (
                typeof keys !==
                'undefined'
            ) {

                keys.shift =
                    false;

            }

        }
    );


    mobileRun.addEventListener(
        'pointerleave',
        () => {

            if (
                typeof keys !==
                'undefined'
            ) {

                keys.shift =
                    false;

            }

        }
    );

}


// ============================================================
// FUNCIÓN GLOBAL
// ============================================================

window.openPanel =
    openPanel;

// ============================================================
// FUNCIONES COMPATIBLES CON MAIN.JS
// ============================================================

function setupInteractions() {

    console.log(
        'Interacciones inicializadas'
    );

}


function setupWelcome() {

    console.log(
        'Pantalla de bienvenida inicializada'
    );

}


function setupMobileMenu() {

    console.log(
        'Menú móvil inicializado'
    );

}


// ============================================================
// EXPORTAR FUNCIONES
// ============================================================

export {
    setupInteractions,
    setupWelcome,
    setupMobileMenu
};