import * as THREE from 'three';

import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';

import {
    getKeys,
    initializeControls
} from './controls.js';

import {
    loadPlayer,
    updatePlayer,
    getPlayer
} from './player.js';

import {
    updateAnimations
} from './animations.js';

import {
    setupCameraControls,
    updateCamera,
    getCameraYaw
} from './camera.js';

import {
    keepPlayerInsideWorld
} from './collisions.js';

import {
    setupInteractions,
    setupWelcome,
    setupMobileMenu
} from './interactions.js';



/* =====================================================
   CONFIGURACIÓN
===================================================== */

const CONFIG = {

    colegio:
        './models/colegio.glb',

    groundSize:
        1000

};



/* =====================================================
   ESCENA
===================================================== */

const scene =
    new THREE.Scene();


scene.background =
    new THREE.Color(
        0x87b9df
    );



/* =====================================================
   CÁMARA
===================================================== */

const camera =
    new THREE.PerspectiveCamera(

        60,

        window.innerWidth /
        window.innerHeight,

        0.1,

        3000

    );


camera.position.set(
    0,
    4,
    8
);



/* =====================================================
   RENDERER
===================================================== */

const renderer =
    new THREE.WebGLRenderer({

        antialias: true,

        powerPreference:
            'high-performance'

    });


renderer.setSize(
    window.innerWidth,
    window.innerHeight
);


renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);


renderer.shadowMap.enabled =
    true;


renderer.shadowMap.type =
    THREE.PCFSoftShadowMap;


renderer.outputColorSpace =
    THREE.SRGBColorSpace;


renderer.toneMapping =
    THREE.ACESFilmicToneMapping;


renderer.toneMappingExposure =
    1.1;


document
    .getElementById('world')
    .appendChild(
        renderer.domElement
    );



/* =====================================================
   LUCES
===================================================== */

const hemisphere =
    new THREE.HemisphereLight(

        0xffffff,

        0x52687a,

        2.5

    );


scene.add(
    hemisphere
);


const sun =
    new THREE.DirectionalLight(

        0xffffff,

        3

    );


sun.position.set(
    80,
    120,
    80
);


sun.castShadow =
    true;


sun.shadow.mapSize.width =
    2048;


sun.shadow.mapSize.height =
    2048;


sun.shadow.camera.left =
    -200;


sun.shadow.camera.right =
    200;


sun.shadow.camera.top =
    200;


sun.shadow.camera.bottom =
    -200;


scene.add(
    sun
);



/* =====================================================
   SUELO
===================================================== */

const groundGeometry =
    new THREE.PlaneGeometry(

        CONFIG.groundSize,
        CONFIG.groundSize

    );


const groundMaterial =
    new THREE.MeshStandardMaterial({

        color:
            0x4d7251,

        roughness:
            1

    });


const ground =
    new THREE.Mesh(

        groundGeometry,
        groundMaterial

    );


ground.rotation.x =
    -Math.PI / 2;


ground.receiveShadow =
    true;


scene.add(
    ground
);



/* =====================================================
   ELEMENTOS HTML
===================================================== */

const loadingScreen =
    document.getElementById(
        'loading-screen'
    );


const loadingProgress =
    document.getElementById(
        'loading-progress'
    );


const loadingPercent =
    document.getElementById(
        'loading-percent'
    );


const loadingText =
    document.getElementById(
        'loading-text'
    );



/* =====================================================
   CARGA
===================================================== */

function updateLoading(
    percent,
    text
) {

    const value =
        THREE.MathUtils.clamp(
            percent,
            0,
            100
        );


    loadingProgress.style.width =
        `${value}%`;


    loadingPercent.textContent =
        `${Math.round(value)}%`;


    loadingText.textContent =
        text;

}



/* =====================================================
   CARGAR COLEGIO
===================================================== */

function loadCollege() {

    return new Promise(
        (resolve, reject) => {

            const loader =
                new GLTFLoader();


            loader.load(

                CONFIG.colegio,


                gltf => {

                    const colegio =
                        gltf.scene;


                    colegio.name =
                        'UnidadEducativa';


                    colegio.traverse(
                        object => {

                            if (
                                object.isMesh
                            ) {

                                object.castShadow =
                                    true;

                                object.receiveShadow =
                                    true;

                            }

                        }
                    );


                    scene.add(
                        colegio
                    );


                    console.log(
                        'Colegio cargado:',
                        colegio
                    );


                    resolve(
                        colegio
                    );

                },


                progress => {

                    if (
                        progress.total
                    ) {

                        const percent =
                            (
                                progress.loaded /
                                progress.total
                            ) * 50;


                        updateLoading(
                            percent,
                            'Cargando modelo de la institución...'
                        );

                    }

                },


                error => {

                    console.error(
                        'Error cargando colegio:',
                        error
                    );


                    reject(
                        error
                    );

                }

            );

        }
    );

}



/* =====================================================
   RELOJ
===================================================== */

const clock =
    new THREE.Clock();



/* =====================================================
   INICIO
===================================================== */

async function start() {

    /*
        =================================================
        PRIMERO ACTIVAMOS LA INTERFAZ
        =================================================

        De esta manera los botones funcionan
        inmediatamente, sin esperar a que terminen
        de cargar los modelos 3D.
    */

    setupInteractions();

    setupWelcome();

    setupMobileMenu();

    initializeControls();

    setupCameraControls(
        renderer
    );


    /*
        =================================================
        INICIAMOS EL MUNDO 3D
        =================================================
    */

    animate();


    try {

        updateLoading(
            5,
            'Preparando mundo 3D...'
        );


        /*
            Cargar colegio
        */

        await loadCollege();


        updateLoading(
            55,
            'Cargando personaje de Mixamo...'
        );


        /*
            Cargar personaje
        */

        await loadPlayer(

            scene,

            percent => {

                updateLoading(

                    55 +
                    percent * 0.45,

                    'Cargando personaje de Mixamo...'

                );

            }

        );


        /*
            Todo cargado
        */

        updateLoading(
            100,
            '¡Mundo preparado!'
        );


        setTimeout(
            () => {

                loadingScreen.style.display =
                    'none';

            },
            600
        );


        console.log(
            'AYACUCHO 3D iniciado correctamente.'
        );


    }
    catch (error) {

        console.error(
            'ERROR DEL MUNDO 3D:',
            error
        );


        updateLoading(

            0,

            'No se pudieron cargar los modelos. Revisa la carpeta models.'

        );

    }

}

/* =====================================================
   ANIMACIÓN PRINCIPAL
===================================================== */

function animate() {

    requestAnimationFrame(
        animate
    );


    const delta =
        Math.min(
            clock.getDelta(),
            0.05
        );


    const player =
        getPlayer();


    const keys =
        getKeys();


    if (player) {

        updatePlayer(
            delta,
            keys,
            getCameraYaw()
        );


        keepPlayerInsideWorld(
            player
        );


        updateCamera(
            camera,
            player,
            delta
        );

    }


    updateAnimations(
        delta
    );


    renderer.render(
        scene,
        camera
    );

}



/* =====================================================
   RESIZE
===================================================== */

window.addEventListener(
    'resize',
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;


        camera.updateProjectionMatrix();


        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);



/* =====================================================
   INICIAR
===================================================== */

start();