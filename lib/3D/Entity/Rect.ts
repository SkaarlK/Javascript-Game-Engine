import Shape from "./Shape";
import { LineBasicMaterial, BufferGeometry, Vector3, Line } from 'three';

class Rect extends Shape {
    fullLine: Line;
    constructor({ color = 0x00ff00, animation = function() {} }: IRect) {
        super({
            geometry: new BufferGeometry().setFromPoints([
                new Vector3(-10, 0, 0),
                new Vector3(0, 10, 0),
                new Vector3(10, 0, 0),
            ]),
            material: new LineBasicMaterial({ color }),
            animation
        });
        this.fullLine = new Line(this.geometry, this.material);
    }

    animate(deltaTime: number) { this.animation(deltaTime) }
}

interface IRect { color?: number, animation: Function };

export default Rect;