import { scene, camera, renderer, screen, loop, animations } from './lib/3D/utils.ts';
import { Polygon, Cube } from './lib/components.ts'

screen.start(scene, camera, renderer);

const cube = new Cube({
    animation: animations.rotate(0.02, 0.02),
});

scene.add(cube);

camera.position.z = 10;

loop.animate(0);
