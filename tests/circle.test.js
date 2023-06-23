const Circle = require('../lib/circle')

describe('Square', () => {
    describe('colorSquare', () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
        const shape = new Circle('SVG', 'blue', 'black');
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20"/>" fill="blue"/>');
    
    })        
    })
})