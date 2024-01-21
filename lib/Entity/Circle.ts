import { Shape } from './Shape.ts';
import { CircleGeometry } from 'three';

export class Circle extends Shape {
    constructor({ radius = 1, segments = 8, color = 0x00ff00 }: { radius?: number, segments?: number, color?: number }) {
        super({ geometry: new CircleGeometry(radius, segments), color });
    }
}