<script lang="ts" setup>
import { scene, camera, renderer, screen, loop, loader, animations, mouse, raycaster } from '@/lib/utils';
import { AxesHelper } from 'three';

const CAMERA_SPEED = 0.25;
const game = screen.createScreen(scene, camera, renderer);

const dpi = window.devicePixelRatio || 1;

console.log("DPI: ", dpi)
game.width *= dpi;
game.height *= dpi;

const isTouchingTopBorder = (n: number) => n > 0.98
const isTouchingBottomBorder = (n: number) =>  n < 0.02

const isTouchingRightBorder = (n: number) => n > 0.98
const isTouchingLeftBorder = (n: number) => n < 0.02

const mouseTouchingBorders = (e: { clientX: number; clientY: number }) => {
    if (isTouchingTopBorder(e.clientY / game.height)) {
        camera.position.z += CAMERA_SPEED;
    }
    if (isTouchingBottomBorder(e.clientY / game.height)) {
        camera.position.z -= CAMERA_SPEED;
    }
    if (isTouchingRightBorder(e.clientX / game.width)) {
        camera.position.x += CAMERA_SPEED;
    }
    if (isTouchingLeftBorder(e.clientX / game.width)) {
        camera.position.x -= CAMERA_SPEED;
    }
}

document.addEventListener('mousemove', mouseTouchingBorders);

loader.load(
    "Tank/scene.gltf",
    gltf => scene.add(gltf.scene),
    xhr => console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ),
    error => console.error( error )
)

camera.position.set( 0, 20, 0 );
camera.lookAt( 0, 0, 0 );

const axesHelper = new AxesHelper(100);
scene.add(axesHelper);

loop.animate(0);
</script>

<template>
<div></div>
</template>


<style lang="scss"></style>