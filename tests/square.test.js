const Square = require('../lib/square')

describe('Square', () => {
    describe('colorSquare', () => {
        it('returns a string for the corresponding SVG file with the given shape color', () => {
        const shape = new Square('SVG', 'blue', 'black');
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="10" y="10" width="30" height="30"/>" fill="blue"/>');
    
    })        
    })
})