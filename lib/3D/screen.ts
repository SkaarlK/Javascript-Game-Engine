import { Camera, Scene, WebGLRenderer } from "three";

class Screen {
    parent: HTMLElement = document.body;
    renderer: WebGLRenderer;
    scene: Scene;
    camera: Camera;

    constructor(scene: Scene, camera: Camera, renderer: WebGLRenderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.appendRenderer();
    }

    appendRenderer() {
        this.parent.appendChild(this.renderer.domElement);
    }
}

const start = (scene: Scene, camera: Camera, renderer: WebGLRenderer) => new Screen(scene, camera, renderer);

export {
    start
}