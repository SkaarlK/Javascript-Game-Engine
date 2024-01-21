import { scene, camera, renderer, screen, loop, animations } from './lib/3D/utils.ts';
import { Polygon, Cube, Rect, Triangle } from './lib/components.ts'

screen.start(scene, camera, renderer);

const element = new Cube({
    width: 100,
    animation: animations.rotate(0.01, 0.02),
});

scene.add(element);

camera.position.set( 0, 0, 50 );
camera.lookAt( 0, 0, 0 );

loop.animate(0);
