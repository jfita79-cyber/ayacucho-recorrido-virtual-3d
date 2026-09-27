import * as THREE from 'three';


// =====================================================
// CONFIGURACIÓN
// =====================================================

const CONFIG = {

    // Distancia de la cámara al personaje
    distance: 18,

    // Altura
    height: 4,

    // Punto donde mira
    lookHeight: 5,

    // Zoom
    minDistance: 7,
    maxDistance: 20,

    // Mouse
    mouseSensitivity: 0.005,

    // Suavidad
    smoothness: 8

};


// =====================================================
// VARIABLES
// =====================================================

let yaw =Math.PI + 4.7;

let pitch = 0.15;

let distance =
    CONFIG.distance;

let targetDistance =
    CONFIG.distance;

let dragging = false;

let lastMouseX = 0;

let lastMouseY = 0;


// =====================================================
// CONTROLES DE CÁMARA
// =====================================================

export function setupCameraControls(renderer) {

    const element =
        renderer.domElement;


    // =================================================
    // CLICK DEL MOUSE
    // =================================================

    element.addEventListener(
        'mousedown',
        event => {

            dragging = true;

            lastMouseX =
                event.clientX;

            lastMouseY =
                event.clientY;

        }
    );


    // =================================================
    // SOLTAR MOUSE
    // =================================================

    window.addEventListener(
        'mouseup',
        () => {

            dragging = false;

        }
    );


    // =================================================
    // MOVER MOUSE
    // =================================================

    window.addEventListener(
        'mousemove',
        event => {

            if (!dragging) {
                return;
            }


            const deltaX =
                event.clientX -
                lastMouseX;


            const deltaY =
                event.clientY -
                lastMouseY;


            lastMouseX =
                event.clientX;

            lastMouseY =
                event.clientY;


            // Girar cámara horizontalmente
            yaw -=
                deltaX *
                CONFIG.mouseSensitivity;


            // Girar cámara verticalmente
            pitch -=
                deltaY *
                CONFIG.mouseSensitivity;


            // Limitar inclinación
            pitch =
                THREE.MathUtils.clamp(
                    pitch,
                    -0.3,
                    0.7
                );

        }
    );


    // =================================================
    // RUEDA DEL MOUSE
    // =================================================

    element.addEventListener(
        'wheel',
        event => {

            event.preventDefault();


            targetDistance +=
                event.deltaY * 0.01;


            targetDistance =
                THREE.MathUtils.clamp(
                    targetDistance,
                    CONFIG.minDistance,
                    CONFIG.maxDistance
                );

        },
        {
            passive: false
        }
    );


    console.log(
        '🎥 Cámara configurada'
    );

}


// =====================================================
// ACTUALIZAR CÁMARA
// =====================================================

export function updateCamera(
    camera,
    player,
    delta
) {

    if (!player) {
        return;
    }


    // =================================================
    // ZOOM SUAVE
    // =================================================

    distance =
        THREE.MathUtils.lerp(
            distance,
            targetDistance,
            Math.min(
                1,
                8 * delta
            )
        );


    // =================================================
    // PUNTO AL QUE APUNTA
    // =================================================

    const target =
        new THREE.Vector3(

            player.position.x,

            player.position.y +
            CONFIG.lookHeight,

            player.position.z

        );


    // =================================================
    // POSICIÓN DE LA CÁMARA
    // =================================================

    const offset =
        new THREE.Vector3(

            0,

            CONFIG.height,

            distance

        );


    // Rotar el desplazamiento según YAW
    offset.applyAxisAngle(
        new THREE.Vector3(0, 1, 0),
        yaw
    );


    // Aplicar inclinación
    offset.y +=
        Math.sin(pitch) *
        distance;


    const desiredPosition =
        new THREE.Vector3(

            player.position.x +
            offset.x,

            player.position.y +
            offset.y,

            player.position.z +
            offset.z

        );


    // =================================================
    // MOVIMIENTO SUAVE
    // =================================================

    const smooth =
        Math.min(
            1,
            CONFIG.smoothness *
            delta
        );


    camera.position.lerp(
        desiredPosition,
        smooth
    );


    // =================================================
    // MIRAR AL PERSONAJE
    // =================================================

    camera.lookAt(
        target
    );

}


// =====================================================
// YAW DE LA CÁMARA
// =====================================================

export function getCameraYaw() {

    return yaw;

}