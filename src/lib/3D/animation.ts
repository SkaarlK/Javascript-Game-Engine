import { renderer } from '@/lib/3D/renderer';
import { scene } from '@/lib/3D/scene';
import { camera } from '@/lib/3D/camera';

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

const loop = new AnimationLoop();

export {
    loop
}
