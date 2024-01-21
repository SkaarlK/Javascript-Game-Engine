import { WebGLRenderer } from 'three';

const screen = {
    width: window.innerWidth,
    height: window.innerHeight
}

const renderer = new WebGLRenderer();

renderer.setSize(screen.width, screen.height);

export {
    renderer
}