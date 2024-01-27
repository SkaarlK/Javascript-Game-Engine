<script lang="ts" setup>
import { scene, camera, renderer, screen, loop, Cube, animations, mouse, raycaster } from '@/lib/utils';
import { Vector3, type Intersection, type Object3D, type Object3DEventMap, Plane } from 'three';
import { ref, type Ref } from "vue";

const speed = 1;
const groundPlane = new Plane(new Vector3(0, 0, 1), 0);
let selectedObject: Ref<Object3D<Object3DEventMap>> | null;

screen.start(scene, camera, renderer);
loop.setControls('orbit');

function onMouseDown(event: { clientX: number; clientY: number; button: number }) {
    if (event.button === 0) {
        console.log(event.button)
        // Update the mouse position
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);
    
        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(scene.children);
    
        if (intersects.length > 0) {
            // If an object is intersected and the left button is clicked, select the object
            selectedObject = ref(intersects[0].object)
        }
    }
}
function onMouseUp(event: { button: number }) {
    // If an object is selected and the right button is clicked, move the object
    if (selectedObject?.value && event.button === 2) {
        // Create a ray from the camera through the mouse position
        raycaster.setFromCamera(mouse, camera);

        // Find where this ray intersects the ground plane
        const target = new Vector3();
        raycaster.ray.intersectPlane(groundPlane, target);

        // Move the selected object to the intersection point
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

const element = new Cube({
    animation: animations.rotate(0.005, 0.0025)
});

camera.position.set( 0, 0, 25 );
camera.lookAt( 0, 0, 0 );
loop.animate(0);

if (loop?.controls) {
    loop.controls.enableDamping = true;
    loop.controls.dampingFactor = 0.05;
    loop.controls.screenSpacePanning = false;
    loop.controls.minDistance = 100;
    loop.controls.maxDistance = 500;
    loop.controls.maxPolarAngle = Math.PI / 2;
}

scene.add(element);
</script>

<template>
<div></div>
</template>


<style lang="scss"></style>