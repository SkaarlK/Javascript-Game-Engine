import { renderer } from '../3D/renderer.ts';
import { scene } from '../3D/scene.ts';
import { camera } from '../3D/camera.ts';

interface Animatable {
    animate(deltaTime: number): void;
}

class AnimationLoop {
    entities: Animatable[] = [];
    lastTime: number = 0;

    addEntity(entity: Animatable) {
        this.entities.push(entity);
    }

    animate(time: number = 0) {
        const deltaTime = time - this.lastTime;
        this.lastTime = time;
        this.entities.forEach(entity => entity.animate(deltaTime));
        
        requestAnimationFrame((time) => this.animate(time));
        renderer.render( scene, camera );
    }
}

export const animationLoop = new AnimationLoop();
