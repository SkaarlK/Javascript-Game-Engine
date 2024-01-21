import Shape from './Shape';
import { ShapeGeometry, MeshBasicMaterial } from 'three';
import { Shape as ThreeShape } from 'three/src/extras/core/Shape.js';

class Triangle extends Shape {
    constructor({ a = [0, 0], b = [1, 0], c = [0, 1], color = 0x00ff00, animation = () => {} }: ITriangle) {
        const shape = new ThreeShape();
        shape.moveTo(...a);
        shape.lineTo(...b);
        shape.lineTo(...c);
        shape.lineTo(...a);
        super({
            geometry: new ShapeGeometry(shape),
            material: new MeshBasicMaterial({ color }),
            animation
        });
    }
    animate(deltaTime: number) { this.animation(deltaTime) }
}

interface ITriangle { a?: [number, number], b?: [number, number], c?: [number, number], color?: number, animation: Function }

export default Triangle;