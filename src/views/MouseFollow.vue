<script lang="ts" setup>
import { scene, camera, renderer, screen, loop, Cube, animations, mouse, raycaster } from '@/lib/utils';
import { Vector3, type Intersection, type Object3D, type Object3DEventMap, Plane } from 'three';
import { ref, type Ref } from "vue";

const speed = 1;
const groundPlane = new Plane(new Vector3(0, 0, 1), 0);
let selectedObject: Ref<Object3D<Object3DEventMap>> | null;

screen.createScreen(scene, camera, renderer);
loop.setControls('orbit');


if (loop?.controls) {
    loop.controls.enableRotate = false;
}

function onMouseDown(event: { clientX: number; clientY: number; button: number }) {
    if (event.button === 0) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0) {
            selectedObject = ref(intersects[0].object)
        }
    }
}

function onMouseUp(event: { button: number }) {
    if (selectedObject?.value && event.button === 0) {
        raycaster.setFromCamera(mouse, camera);
        const target = new Vector3();
        raycaster.ray.intersectPlane(groundPlane, target);
        selectedObject.value.position.copy(target);
    }
}

window.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
        camera.position.z += speed;
    } else {
        camera.position.z -= speed;
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
}, false);

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

document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mouseup', onMouseUp, false);

const floor = new Cube({
    width: 100,
    height: 0.1,
    depth: 100,
    color: 0x00ff00,
});

camera.position.set( 0, 50, 50 );
camera.lookAt( 0, 0, 0 );
loop.animate(0);
scene.add(floor);

</script>

<template>
<div></div>
</template>


<style lang="scss"></style>