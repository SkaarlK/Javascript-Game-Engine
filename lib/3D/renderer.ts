import { WebGLRenderer } from 'three';

const screen = {
    width: window.innerWidth,
    height: window.innerHeight
}

export const renderer = new WebGLRenderer();

renderer.setSize(screen.width, screen.height);
