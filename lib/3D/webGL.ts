import WebGL from 'three/examples/jsm/capabilities/WebGL.js';

const isWebGLSupported = () => WebGL.isWebGLAvailable();
const getWebGLErrorMessage = () => WebGL.getWebGLErrorMessage();

export {
    isWebGLSupported, getWebGLErrorMessage
}