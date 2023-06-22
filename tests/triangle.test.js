const Triangle = require('../lib/triangle')

describe('Triangle', () => {
    describe('colorTriangle', () => {
        it('returns a string for the corresponding SVG file with the given shape color')
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    })
})
