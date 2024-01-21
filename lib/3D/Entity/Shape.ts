import { BoxGeometry, MeshBasicMaterial, LineBasicMaterial, Mesh, Object3D, BufferGeometry, Line } from 'three';
import { loop } from "../../utils";
class Shape extends Object3D {
    geometry: RegularShapeGeometry;
    material: RegularShapeMaterial;
    mesh: RegularShapeMesh;
    animation: Function = function() {};

    constructor({ geometry, material, animation }: IRegularShape) {
        super();
        this.geometry = geometry;
        this.material = material;
        this.mesh = new Mesh(geometry, material);
        this.add(this.mesh);

        if (animation)
            this.animation = animation;

        loop.addEntity(this);
    };

    animate(deltaTime: number) {}
}

type RegularShapeGeometry = BufferGeometry | BoxGeometry;
type RegularShapeMaterial = MeshBasicMaterial | LineBasicMaterial;
type RegularShapeMesh = Mesh | Line;

interface IRegularShape {
    geometry: BufferGeometry,
    material: MeshBasicMaterial | LineBasicMaterial
    animation: Function;
}

export default Shape;