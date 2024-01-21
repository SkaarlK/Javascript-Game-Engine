import Shape from './Shape';
import { BoxGeometry, MeshBasicMaterial } from 'three';

class Cube extends Shape {
    constructor({ width = 1, height = 1, depth = 1, color = 0x00ff00, animation }: ICube) {
        super({
            geometry: new BoxGeometry(width, height, depth),
            material: new MeshBasicMaterial({ color }),
            animation
        });
    }
    animate(deltaTime: number) { this.animation(deltaTime) }
}

interface ICube { width?: number, height?: number, depth?: number, color?: number, animation?: Function };

export default Cube;