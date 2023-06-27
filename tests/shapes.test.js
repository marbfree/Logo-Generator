const { Square, Triangle, Circle } = require('../lib/shapes')

describe('Square', () => {
    describe('colorSquare', () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
            const shape = new Square('SVG', 'blue', 'black');
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="10" y="10" width="300" height="300" fill="blue"/>');

        })
    })
})

describe('Triangle', () => {
    describe('colorTriangle', () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
            const shape = new Triangle('SVG', 'blue', 'black');
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 0 270, 182 0, 182" fill="blue"/>');

        })
    })
})

describe('Circle', () => {
    describe('colorCircle', () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
            const shape = new Circle('SVG', 'blue', 'black');
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="130" cy="100" r="100" fill="blue"/>');

        })
    })
})