import Shape from './Shape';
import { SphereGeometry, MeshBasicMaterial } from 'three';

class Sphere extends Shape {
    constructor({ radius = 1, color = 0x00ff00, animation }: ISphere) {
        super({
            geometry: new SphereGeometry(radius),
            material: new MeshBasicMaterial({ color }),
            animation
        });
    }
    animate(deltaTime: number) { this.animation(deltaTime) }
}

interface ISphere { radius?: number, color?: number, animation?: Function };

export default Sphere;