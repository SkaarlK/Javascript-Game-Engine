interface Rotation {
    rotation: {
        x: number;
        y: number;
    };
}

const rotate = function (xIncrement: number, yIncrement: number) {
    return function(this: Rotation) {
        this.rotation.x += xIncrement;
        this.rotation.y += yIncrement;
    }
}

export {
    rotate
}
