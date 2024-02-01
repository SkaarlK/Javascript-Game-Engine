<script setup lang="ts">
import { animations, scene, camera, renderer, screen, loop, Cube } from '@/lib/utils';

screen.createScreen(scene, camera, renderer);

const element = new Cube({
    width: 1,
    animation: animations.rotate(0.01, 0.01),
});

scene.add(element);

camera.position.set( 0, 0, 25 );
camera.lookAt( 0, 0, 0 );
loop.animate(0);
</script>

<template>
  <div></div>
</template>
