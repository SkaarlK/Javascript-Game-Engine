import { Shape } from './Shape.ts';
import { Shape as ThreeShape, ShapeGeometry } from 'three';

export class Triangle extends Shape {
    constructor({ a = [0, 0], b = [1, 0], c = [0, 1], color = 0x00ff00 }: { a?: [number, number], b?: [number, number], c?: [number, number], color?: number }) {
        const shape = new ThreeShape();
        shape.moveTo(...a);
        shape.lineTo(...b);
        shape.lineTo(...c);
        shape.lineTo(...a);
        super({ geometry: new ShapeGeometry(shape), color });
    }
}