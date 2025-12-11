// ❌ Violation: Modifying existing class for new functionality
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class AreaCalculator {
    calculate(shape) {
        if (shape instanceof Rectangle) {
            return shape.width * shape.height;
        }
        // Adding new shapes requires modifying this class
    }
}

// ✅ Following OCP: Use polymorphism
class Shape {
    area() {
        throw new Error("Area method not implemented");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}

function calculateArea(shape) {
    return shape.area();
}

const rect = new Rectangle(10, 20);
const circle = new Circle(5);

console.log(calculateArea(rect)); // 200
console.log(calculateArea(circle)); // 78.53981633974483