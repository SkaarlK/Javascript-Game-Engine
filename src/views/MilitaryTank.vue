<script lang="ts" setup>
import { scene, camera, renderer, screen, loop, loader } from '@/lib/utils';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);

screen.start(scene, camera, renderer);

loader.load(
    "Tank/scene.gltf",
    gltf => scene.add(gltf.scene),
    xhr => console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' ),
    error => console.error( error )
)

camera.position.set( 0, 0, 25 );
camera.lookAt( 0, 0, 0 );
loop.animate(0);

renderer.setClearColor(0xffffff)
</script>

<template>
<div></div>
</template>


<style lang="scss"></style>