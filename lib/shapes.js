class Circle {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }

    generateSvg() {
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${this.color}" />
                <text x="150" y="100" font-size="20" fill="white" text-anchor="middle" dy=".3em">
                    ${this.text}
                </text>
            </svg>
        `;
    }
}


class Square {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }

    generateSvg() {
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" x="75" y="25" fill="${this.color}" />
                <text x="150" y="100" font-size="20" fill="white" text-anchor="middle" dy=".3em">
                    ${this.text}
                </text>
            </svg>
        `;
    }
}


class Triangle {
    constructor(color, text) {
        this.color = color;
        this.text = text;
    }

    generateSvg() {
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,25 275,175 25,175" fill="${this.color}" />
                <text x="150" y="100" font-size="20" fill="white" text-anchor="middle" dy=".3em">
                    ${this.text}
                </text>
            </svg>
        `;
    }
}

module.exports = {Circle, Square, Triangle};
