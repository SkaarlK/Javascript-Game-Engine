<script lang="ts" setup>
import { scene, camera, renderer, screen, loop, loader } from '@/lib/utils';

screen.start(scene, camera, renderer);

renderer.setClearColor(0xffffff)

loop.setControls('orbit');

loader.load(
    "Tank/scene.gltf",
    gltf => scene.add(gltf.scene),
    xhr => console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ),
    error => console.error( error )
)

camera.position.set( 0, 0, 25 );
camera.lookAt( 0, 0, 0 );

loop.animate(0);
</script>

<template>
<div></div>
</template>


<style lang="scss"></style>