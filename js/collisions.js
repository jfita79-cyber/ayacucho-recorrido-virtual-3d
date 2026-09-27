import * as THREE from 'three';


const WORLD_LIMIT = 500;


export function keepPlayerInsideWorld(
    player
) {

    if (!player) {
        return;
    }


    player.position.x =
        THREE.MathUtils.clamp(
            player.position.x,
            -WORLD_LIMIT,
            WORLD_LIMIT
        );


    player.position.z =
        THREE.MathUtils.clamp(
            player.position.z,
            -WORLD_LIMIT,
            WORLD_LIMIT
        );

}


/*
    Esta función queda preparada para
    implementar las colisiones reales
    del colegio posteriormente.
*/

export function checkCollisions(
    player,
    obstacles = []
) {

    if (!player) {
        return false;
    }


    return false;

}