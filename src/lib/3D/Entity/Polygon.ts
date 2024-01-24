import Shape from './Shape';
import { CircleGeometry, MeshBasicMaterial } from 'three';

class Polygon extends Shape {
    constructor({ radius = 1, segments = 1, color = 0x00ff00, animation = () => {} }: IPolygon) {
        super({
            geometry: new CircleGeometry(radius, segments),
            material: new MeshBasicMaterial({ color }),
            animation
        });
    }
    animate(deltaTime: number) { this.animation(deltaTime)}
}

interface IPolygon { radius?: number, segments?: number, color?: number, animation: Function };

export default Polygon;