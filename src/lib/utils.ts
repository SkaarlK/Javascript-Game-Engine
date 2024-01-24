import { loop } from "@/lib/3D/animation";
import { camera } from "@/lib/3D/camera";
import { scene } from "@/lib/3D/scene";
import { renderer } from "@/lib/3D/renderer";

import Cube from "@/lib/3D/Entity/Cube";
import Sphere from "@/lib/3D/Entity/Sphere";
import Polygon from "@/lib/3D/Entity/Polygon";
import Triangle from "@/lib/3D/Entity/Triangle";
import Rect from "@/lib/3D/Entity/Rect";

import * as screen from "@/lib/3D/screen";
import * as webGL from "@/lib/3D/webGL";
import * as animations from "@/lib/3D/animations";

export { animations, loop, camera, scene, renderer, screen, webGL, Cube, Polygon, Rect, Triangle, Sphere };