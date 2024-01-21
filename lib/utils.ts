import { animations, loop } from "./3D/animation.ts";
import { camera } from "./3D/camera.ts";
import { scene } from "./3D/scene.ts";
import { renderer } from "./3D/renderer.ts";
import Cube from './3D/Entity/Cube.ts';
import Polygon from './3D/Entity/Polygon.ts';
import Triangle from './3D/Entity/Triangle.ts';
import Rect from './3D/Entity/Rect.ts';

import * as screen from "./3D/screen.ts";
import * as webGL from "./3D/webGL.ts";

export { animations, loop, camera, scene, renderer, screen, webGL, Cube, Polygon, Rect, Triangle };