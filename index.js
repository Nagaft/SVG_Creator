const inquirer = require('inquirer');
const fs = require('fs');

 const {Circle, Square, Triangle} = require('./lib/shapes');
//const Circle = require('./lib/shapes');

console.log(Triangle, Circle, Square)

function generateSVG(userInput) {
    let svgContent;
    switch (userInput.shape.toLowerCase()) {
        case 'circle':
            const circle = new Circle(userInput.shapeColor, userInput.text);
            svgContent = circle.generateSvg();
            break;
        case 'square':
            const square = new Square(userInput.shapeColor, userInput.text);
            svgContent = square.generateSvg();
            break;
        case 'triangle':
            const triangle = new Triangle(userInput.shapeColor, userInput.text);
            svgContent = triangle.generateSvg();
            break;
        default:
            throw new Error('Invalid shape type');
    }
    return svgContent;
}

async function main() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: input => /^[a-zA-Z]{1,3}$/.test(input),
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hex):',
        },
        {
            type: 'list',  
            name: 'shape',
            message: 'Select a shape:',
            choices: ['circle', 'triangle', 'square'],  
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hex):',
        },
    ]);

    console.log(userInput)

    try {
        const svgContent = generateSVG(userInput);
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error(error.message);
    }
}

main();
