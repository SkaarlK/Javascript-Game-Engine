import { renderer } from '@/lib/3D/renderer';
import { scene } from '@/lib/3D/scene';
import { camera } from '@/lib/3D/camera';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Vector3, type PerspectiveCamera } from 'three';

interface Animatable {
    animate(deltaTime: number): void;
}
class AnimationLoop {
    controls?: OrbitControls;
    desiredPosition?: Vector3;
    target?: Vector3;
    entities: Animatable[] = [];
    camera: PerspectiveCamera = camera;
    lastTime: number = 0;

    addEntity(entity: Animatable) {
        this.entities.push(entity);
    }
    setControls(type: string) {
        switch (type) {
            case "orbit":
            default: this.controls = new OrbitControls(camera, renderer.domElement); break;
        }
    }
    setTarget(target: Vector3) {
        this.target = target;
    }
    setDesiredPosition(desiredPosition: Vector3) {
        this.desiredPosition = desiredPosition;
    }

    animate(time: number = 0) {
        const deltaTime = time - this.lastTime;
        this.lastTime = time;
        this.entities.forEach(entity => entity.animate(deltaTime));

        if (this.controls) this.controls.update(deltaTime)

        if (this.target)
            this.setDesiredPosition(new Vector3(
                this.target.x,
                this.target.y - 50,
                this.target.z + 50
            ));

        if (this.desiredPosition) camera.position.lerp(this.desiredPosition, 0.1);
        if (this.target)  camera.lookAt(this.target);

        requestAnimationFrame((time) => this.animate(time));
        renderer.render( scene, camera );
    }
}

const loop = new AnimationLoop();

export {
    loop
}
