const fs = require('fs');
const {Circle, Square, Triangle} = require('./shapes');


function generateSvg(shape, shapeColor, textColor, text) {
    let svgData;
    switch (shape.toLowerCase()) {
        case 'circle':
            const circle = new Circle(shapeColor, text);
            svgData = circle.generateSvg();
            break;
        case 'square':
            const square = new Square(shapeColor, text);
            svgData = square.generateSvg();
            break;
        case 'triangle':
            const triangle = new Triangle(shapeColor, text);
            svgData = triangle.generateSvg();
            break;
        default:
            throw new Error('Invalid shape type');
    }

    fs.writeFileSync('logo.svg', svgData);
    console.log('Generated logo.svg');
}

module.exports = generateSvg;
