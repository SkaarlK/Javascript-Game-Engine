import { scene, camera, renderer, screen, loop, animations, Polygon, Cube, Rect, Triangle } from './lib/utils.ts';

screen.start(scene, camera, renderer);

const element = new Cube({
    width: 100,
    animation: animations.rotate(0.01, 0.02),
});

scene.add(element);

camera.position.set( 0, 0, 50 );
camera.lookAt( 0, 0, 0 );

loop.animate(0);
