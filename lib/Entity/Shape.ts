import { Shape as ThreeShape, ShapeGeometry, MeshBasicMaterial, Mesh, Object3D, BufferGeometry, BoxGeometry, CircleGeometry } from 'three';
import { animationLoop } from '../3D/animation.ts';

export class Shape extends Object3D {
    geometry: BufferGeometry;
    material: MeshBasicMaterial;
    mesh: Mesh;
    animation: Function;

    constructor({ geometry, color = 0x00ff00, animation = () => { } }: { geometry: BufferGeometry, color?: number, animation?: Function }) {
        super();
        const material = new MeshBasicMaterial({ color });
        const mesh = new Mesh(geometry, material);
        this.geometry = geometry;
        this.material = material;
        this.mesh = mesh;
        this.animation = animation;
        this.add(mesh);
        animationLoop.addEntity(this);
    };

    animate(deltaTime: number) {
    }
}