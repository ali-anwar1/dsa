// ❌ Violation: Subclass breaks expectations
class Bird {
    fly() {
        console.log("Flying");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins can't fly");
    }
}

function makeBirdFly(bird) {
    bird.fly();
}



const penguin1 = new Penguin();
makeBirdFly(penguin); // ❌ Throws error


// ❌ Violation: Subclass breaks expectations
class Bird {
    fly() {
        console.log("Flying");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins can't fly");
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const penguin = new Penguin();
makeBirdFly(penguin); // ❌ Throws error