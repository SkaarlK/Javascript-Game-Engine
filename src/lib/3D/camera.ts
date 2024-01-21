import { PerspectiveCamera } from 'three';

const FOV = 75;
const ASPECT = window.innerWidth / window.innerHeight;
const NEAR = 0.1;
const FAR = 1000;
const camera = new PerspectiveCamera(FOV, ASPECT, NEAR, FAR);

export {
    camera
}