<script lang="ts" setup>
import { animations, scene, camera, renderer, screen, loop, Sphere } from '@/lib/utils';

screen.start(scene, camera, renderer);

const element = new Sphere({
    animation: animations.rotate(0.01, 0.01),
});

scene.add(element);

const speed = 1;
document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    const edgeSize = 50;

    if (x < edgeSize) {
        // Left edge
        camera.position.x -= speed;
    } else if (x > window.innerWidth - edgeSize) {
        // Right edge
        camera.position.x += speed;
    }

    if (y < edgeSize) {
        // Top edge
        camera.position.y += speed;
    } else if (y > window.innerHeight - edgeSize) {
        // Bottom edge
        camera.position.y -= speed;
    }
});

window.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
        camera.position.z += speed;
    } else {
        camera.position.z -= speed;
    }
});

camera.position.set( 0, 0, 25 );
camera.lookAt( 0, 0, 0 );
loop.animate(0);
</script>

<template>
<div></div>
</template>


<style lang="scss"></style>