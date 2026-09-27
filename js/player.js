import * as THREE from 'three';

import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

import {
    initializeAnimations,
    loadAllAnimations,
    playAnimation,
    hasAnimation
} from './animations.js';


// =====================================================
// CONFIGURACIÓN
// =====================================================

const CONFIG = {

    // Tamaño
    scale: 0.03,


    // =================================================
    // POSICIÓN INICIAL
    // =================================================

    // Más a la derecha
    startX: 100,

    // Altura
    startY: 0,

    // Delante del modelo
    startZ: 25,


    // =================================================
    // VELOCIDADES
    // =================================================

    walkSpeed: 5,

    runSpeed: 10,


    // =================================================
    // GIRO
    // =================================================

    rotationSpeed: 10

};


// =====================================================
// PERSONAJE
// =====================================================

let player = null;


// =====================================================
// CARGAR PERSONAJE
// =====================================================

export function loadPlayer(scene, onProgress) {

    return new Promise(
        (resolve, reject) => {

            const loader =
                new FBXLoader();


            loader.load(

                './models/personaje.fbx',


                async object => {

                    player = object;

                    player.name =
                        'Player';


                    // =========================================
                    // ESCALA
                    // =========================================

                    player.scale.setScalar(
                        CONFIG.scale
                    );


                    // =========================================
                    // POSICIÓN
                    // =========================================

                    player.position.set(

                        CONFIG.startX,

                        CONFIG.startY,

                        CONFIG.startZ
                        

                    );
                    // Mirar hacia X positivo
                    player.rotation.y = Math.PI / 2;


                    // =========================================
                    // SOMBRAS
                    // =========================================

                    player.traverse(
                        child => {

                            if (
                                child.isMesh
                            ) {

                                child.castShadow =
                                    true;

                                child.receiveShadow =
                                    true;

                            }

                        }
                    );


                    // =========================================
                    // COLOCAR SOBRE EL SUELO
                    // =========================================

                    const box =
                        new THREE.Box3()
                            .setFromObject(
                                player
                            );


                    const minY =
                        box.min.y;


                    if (
                        minY < 0
                    ) {

                        player.position.y -=
                            minY;

                    }


                    // =========================================
                    // AGREGAR A ESCENA
                    // =========================================

                    scene.add(
                        player
                    );


                    console.log(
                        '👤 Personaje cargado'
                    );

                    console.log(
                        '📍 Posición:',
                        player.position
                    );


                    // =========================================
                    // ANIMACIONES
                    // =========================================

                    try {

                        initializeAnimations(
                            player
                        );


                        await loadAllAnimations();


                        console.log(
                            '🎬 Animaciones cargadas'
                        );


                    } catch (error) {

                        console.error(
                            '❌ Error de animaciones:',
                            error
                        );

                    }


                    resolve(
                        player
                    );

                },


                // =========================================
                // PROGRESO
                // =========================================

                progress => {

                    if (
                        progress.total > 0
                    ) {

                        const percent =
                            (
                                progress.loaded /
                                progress.total
                            ) * 100;


                        if (onProgress) {

                            onProgress(
                                percent
                            );

                        }

                    }

                },


                // =========================================
                // ERROR
                // =========================================

                error => {

                    console.error(
                        '❌ Error cargando personaje:',
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


// =====================================================
// ACTUALIZAR PERSONAJE
// =====================================================

export function updatePlayer(
    delta,
    keys,
    cameraYaw
) {

    if (!player) {
        return;
    }


    // =================================================
    // VECTORES
    // =================================================

    const forward =
        new THREE.Vector3();

    const right =
        new THREE.Vector3();

    const direction =
        new THREE.Vector3();


    // =================================================
    // DIRECCIÓN DE LA CÁMARA
    // =================================================

    forward.set(

        -Math.sin(cameraYaw),

        0,

        -Math.cos(cameraYaw)

    );


    right.set(

        Math.cos(cameraYaw),

        0,

        -Math.sin(cameraYaw)

    );


    // =================================================
    // W
    // =================================================

    if (keys.w) {

        direction.add(
            forward
        );

    }


    // =================================================
    // S
    // =================================================

    if (keys.s) {

        direction.sub(
            forward
        );

    }


    // =================================================
    // A
    // =================================================

    if (keys.a) {

        direction.sub(
            right
        );

    }


    // =================================================
    // D
    // =================================================

    if (keys.d) {

        direction.add(
            right
        );

    }


    // =================================================
    // ¿SE MUEVE?
    // =================================================

    const moving =
        direction.lengthSq() > 0;


    // =================================================
    // IDLE
    // =================================================

    if (!moving) {

        if (
            hasAnimation('idle')
        ) {

            playAnimation(
                'idle'
            );

        }

        return;

    }


    direction.normalize();


    // =================================================
    // VELOCIDAD
    // =================================================

    let speed =
        CONFIG.walkSpeed;


    // Correr solamente SHIFT + W

    const running =
        keys.shift &&
        keys.w &&
        !keys.s;


    if (running) {

        speed =
            CONFIG.runSpeed;

    }


    // =================================================
    // MOVIMIENTO
    // =================================================

    player.position.addScaledVector(

        direction,

        speed * delta

    );


    // =================================================
    // ROTACIÓN
    // =================================================

    const targetRotation =
        Math.atan2(

            direction.x,

            direction.z

        );


    let difference =
        targetRotation -
        player.rotation.y;


    difference =
        Math.atan2(

            Math.sin(
                difference
            ),

            Math.cos(
                difference
            )

        );


    player.rotation.y +=

        difference *

        Math.min(

            1,

            CONFIG.rotationSpeed *
            delta

        );


    // =================================================
    // CORRER
    // =================================================

    if (running) {

        if (
            hasAnimation('run')
        ) {

            playAnimation(
                'run'
            );

            return;

        }

    }


    // =================================================
    // ATRÁS
    // =================================================

    if (keys.s) {

        if (
            hasAnimation('backward')
        ) {

            playAnimation(
                'backward'
            );

            return;

        }

        if (
            hasAnimation('walk')
        ) {

            playAnimation(
                'walk'
            );

            return;

        }

    }


    // =================================================
    // IZQUIERDA
    // =================================================

    if (
        keys.a &&
        !keys.w &&
        !keys.s
    ) {

        if (
            hasAnimation('left')
        ) {

            playAnimation(
                'left'
            );

            return;

        }

        if (
            hasAnimation('walk')
        ) {

            playAnimation(
                'walk'
            );

            return;

        }

    }


    // =================================================
    // DERECHA
    // =================================================

    if (
        keys.d &&
        !keys.w &&
        !keys.s
    ) {

        if (
            hasAnimation('right')
        ) {

            playAnimation(
                'right'
            );

            return;

        }

        if (
            hasAnimation('walk')
        ) {

            playAnimation(
                'walk'
            );

            return;

        }

    }


    // =================================================
    // ADELANTE
    // =================================================

    if (keys.w) {

        if (
            hasAnimation('walk')
        ) {

            playAnimation(
                'walk'
            );

        }

    }

}


// =====================================================
// OBTENER PERSONAJE
// =====================================================

export function getPlayer() {

    return player;

}