import { Camera, Scene, WebGLRenderer } from "three";

class Screen {
    parent: HTMLElement = document.body;
    renderer: WebGLRenderer;
    scene: Scene;
    camera: Camera;
    width: number;
    height: number;

    constructor(scene: Scene, camera: Camera, renderer: WebGLRenderer, backgroundColor = 0xffffff) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.renderer.setClearColor(backgroundColor)
        this.width = document.body.clientWidth;
        this.height = window.innerHeight;
        console.log(this.width)
        console.log(this.height)
        this.appendRenderer();
    }

    appendRenderer() {
        this.parent.appendChild(this.renderer.domElement);
    }
}

const createScreen = (scene: Scene, camera: Camera, renderer: WebGLRenderer) => new Screen(scene, camera, renderer);

export {
    createScreen
}