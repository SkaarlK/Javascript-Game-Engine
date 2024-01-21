import { scene } from './lib/3D/scene.ts';
import { camera } from './lib/3D/camera.ts';
import { renderer } from './lib/3D/renderer.ts';
import { makeScreen } from './lib/3D/utils.ts';
import { animationLoop } from './lib/3D/animation.ts';
import { Cube, Triangle, Circle } from './lib/Entity/Components.ts'

makeScreen(scene, camera, renderer);

const cube = new Cube({
    animation: function rotateCube() {
        this.rotation.x += 0.01;
        this.rotation.y += 0.01;
    } 
})

scene.add(cube);

camera.position.z = 5;

animationLoop.animate(0);
