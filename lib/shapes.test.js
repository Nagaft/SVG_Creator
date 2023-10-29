const {Circle, Square, Triangle} = require('./shapes');


describe('Shape Classes', () => {

    describe('Circle', () => {
        it('should generate a valid SVG for Circle', () => {
            const circle = new Circle('blue', 'ABC');
            const svg = circle.generateSvg();
            expect(svg).toContain('<circle');
            expect(svg).toContain('fill="blue"');
            expect(svg).toContain('ABC'); 
        });
    });

    describe('Square', () => {
        it('should generate a valid SVG for Square', () => {
            const square = new Square('red', 'XYZ');
            const svg = square.generateSvg();
            expect(svg).toContain('<rect');
            expect(svg).toContain('fill="red"');
            expect(svg).toContain('XYZ'); 
        });
    });

    describe('Triangle', () => {
        it('should generate a valid SVG for Triangle', () => {
            const triangle = new Triangle('green', 'DEF');
            const svg = triangle.generateSvg();
            expect(svg).toContain('<polygon');
            expect(svg).toContain('fill="green"');
            expect(svg).toContain('DEF');  
        });
    });

});

