import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';


// =====================================================
// SISTEMA DE ANIMACIONES
// =====================================================

let mixer = null;
let player = null;

let currentAction = null;
let currentAnimationName = '';

const actions = {};


// =====================================================
// ARCHIVOS DE MIXAMO
// =====================================================

const animationFiles = {

    idle: './models/idle.fbx',

    walk: './models/caminar.fbx',

    backward: './models/atras.fbx',

    left: './models/izquierda.fbx',

    right: './models/derecha.fbx',

    run: './models/correr.fbx'

};


// =====================================================
// INICIALIZAR
// =====================================================

export function initializeAnimations(character) {

    player = character;

    mixer = new THREE.AnimationMixer(player);

    currentAction = null;
    currentAnimationName = '';

    console.log('====================================');
    console.log('🎬 SISTEMA DE ANIMACIONES');
    console.log('====================================');

}


// =====================================================
// CARGAR TODAS LAS ANIMACIONES
// =====================================================

export async function loadAllAnimations() {

    if (!player || !mixer) {

        console.error(
            '❌ No existe personaje o mixer'
        );

        return;

    }


    const loader = new FBXLoader();


    for (
        const [name, path]
        of Object.entries(animationFiles)
    ) {

        try {

            console.log(
                `🎬 Cargando: ${name}`
            );

            console.log(
                `📁 ${path}`
            );


            const object =
                await loadFBX(
                    loader,
                    path
                );


            if (
                !object.animations ||
                object.animations.length === 0
            ) {

                console.error(
                    `❌ ${name}: el archivo no tiene animación`
                );

                continue;

            }


            let clip =
                object.animations[0];


            console.log(
                `✅ ${name} encontrada`
            );

            console.log(
                `Duración: ${clip.duration.toFixed(2)} segundos`
            );


            // =================================================
            // LIMPIAR TRACKS PROBLEMÁTICOS
            // =================================================

            clip =
                cleanAnimationClip(
                    clip
                );


            // =================================================
            // CREAR ACTION
            // =================================================

            const action =
                mixer.clipAction(
                    clip
                );


            action.enabled = true;

            action.setLoop(
                THREE.LoopRepeat,
                Infinity
            );

            action.clampWhenFinished = false;


            // Velocidad normal
            action.setEffectiveTimeScale(1);

            action.setEffectiveWeight(1);


            actions[name] = action;


            console.log(
                `✅ Acción "${name}" lista`
            );


        } catch (error) {

            console.error(
                `❌ Error cargando ${name}`,
                error
            );

        }

    }


    console.log('====================================');
    console.log('🎬 ANIMACIONES DISPONIBLES');
    console.log(Object.keys(actions));
    console.log('====================================');


    // =================================================
    // IDLE INICIAL
    // =================================================

    if (actions.idle) {

        playAnimation('idle');

    }
    else if (actions.walk) {

        playAnimation('walk');

    }

}


// =====================================================
// LIMPIAR ANIMACIÓN
// =====================================================

function cleanAnimationClip(clip) {

    const validTracks = [];


    for (const track of clip.tracks) {

        const trackName =
            track.name.toLowerCase();


        // =================================================
        // ELIMINAR MOVIMIENTO DEL ROOT / HIPS
        // =================================================

        if (
            trackName.includes(
                'mixamorig:hips.position'
            )
        ) {

            console.log(
                '🧹 Eliminando root motion:',
                track.name
            );

            continue;

        }


        if (
            trackName.includes(
                'mixamorighips.position'
            )
        ) {

            console.log(
                '🧹 Eliminando root motion:',
                track.name
            );

            continue;

        }


        // =================================================
        // ELIMINAR POSICIÓN DEL OBJETO PRINCIPAL
        // =================================================

        if (
            trackName === 'position'
        ) {

            console.log(
                '🧹 Eliminando posición:',
                track.name
            );

            continue;

        }


        validTracks.push(track);

    }


    return new THREE.AnimationClip(
        clip.name,
        clip.duration,
        validTracks
    );

}


// =====================================================
// CARGAR FBX
// =====================================================

function loadFBX(loader, path) {

    return new Promise(
        (resolve, reject) => {

            loader.load(

                path,

                object => {

                    resolve(object);

                },

                undefined,

                error => {

                    reject(error);

                }

            );

        }
    );

}


// =====================================================
// REPRODUCIR ANIMACIÓN
// =====================================================

export function playAnimation(name) {

    if (!mixer) {
        return;
    }


    const newAction =
        actions[name];


    if (!newAction) {

        console.warn(
            `⚠️ No existe animación: ${name}`
        );

        return;

    }


    // =================================================
    // EVITAR REINICIAR LA MISMA ANIMACIÓN
    // =================================================

    if (
        currentAction === newAction &&
        currentAnimationName === name
    ) {

        return;

    }


    console.log(
        `🎬 ${currentAnimationName} → ${name}`
    );


    // =================================================
    // ANIMACIÓN ANTERIOR
    // =================================================

    if (currentAction) {

        currentAction
            .fadeOut(0.20);

    }


    // =================================================
    // NUEVA ANIMACIÓN
    // =================================================

    newAction
        .reset()
        .fadeIn(0.20)
        .play();


    currentAction =
        newAction;

    currentAnimationName =
        name;


    // =================================================
    // VELOCIDAD DE ANIMACIONES
    // =================================================

    if (name === 'run') {

        newAction.setEffectiveTimeScale(
            1.15
        );

    }
    else {

        newAction.setEffectiveTimeScale(
            1
        );

    }

}


// =====================================================
// ACTUALIZAR
// =====================================================

export function updateAnimations(delta) {

    if (!mixer) {
        return;
    }


    mixer.update(delta);

}


// =====================================================
// COMPROBAR ANIMACIÓN
// =====================================================

export function hasAnimation(name) {

    return !!actions[name];

}


// =====================================================
// OBTENER ANIMACIÓN
// =====================================================

export function getAnimation(name) {

    return actions[name];

}