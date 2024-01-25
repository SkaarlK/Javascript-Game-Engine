import { renderer } from '@/lib/3D/renderer';
import { scene } from '@/lib/3D/scene';
import { camera } from '@/lib/3D/camera';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { PerspectiveCamera } from 'node_modules/@types/three';

interface Animatable {
    animate(deltaTime: number): void;
}
class AnimationLoop {
    controls?: OrbitControls;
    entities: Animatable[] = [];
    camera: PerspectiveCamera = camera;
    lastTime: number = 0;

    addEntity(entity: Animatable) {
        this.entities.push(entity);
    }
    setControls(controls?: OrbitControls) {
        this.controls = controls;
    }

    animate(time: number = 0) {
        const deltaTime = time - this.lastTime;
        this.lastTime = time;
        this.entities.forEach(entity => entity.animate(deltaTime));

        if (this.controls) {
            this.controls.update(deltaTime);
        }

        requestAnimationFrame((time) => this.animate(time));
        renderer.render( scene, camera );
    }
}

const loop = new AnimationLoop();

export {
    loop
}
