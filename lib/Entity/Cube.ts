import { Shape } from './Shape.ts';
import { BoxGeometry } from 'three';

export class Cube extends Shape {
    animation: Function;
    constructor({ width = 1, height = 1, depth = 1, color = 0x00ff00, animation = () => {} }: { width?: number, height?: number, depth?: number, color?: number, animation?: Function }) {
        super({ geometry: new BoxGeometry(width, height, depth), color });
        this.animation = animation;
    }

    animate(deltaTime: number) {
        this.animation(deltaTime);
    }
}